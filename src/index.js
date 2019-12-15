import geohash from 'ngeohash';
import moment from 'moment-timezone';
import proj4 from 'proj4';
import _ from 'lodash';
import { validate } from 'jsonschema';
import { ShiftConfiguration, FirecaresLookup } from '@statengine/shiftly';
import { schemas } from '@statengine/schemas';
import fs from 'fs';
import xml2js from 'xml2js';
import Promise from 'bluebird';
import helpers from './helpers';

export function transformDate(dateString, timeZone, format) {
  return moment.tz(dateString, format, timeZone);
}

export class BaseNormalizer {
  // eslint-disable-next-line class-methods-use-this
  static get schema() {
    throw new Error('Not implemented.');
  }

  transformCoordinates(x, y, toProjection = 'EPSG:4326') {
    return proj4(proj4(this.projection), proj4(toProjection), [x, y]);
  }

  parseDate(incomingDate) {
    // Assume dates are already in ISO-8601, just convert them into to the department's TZ.
    return moment(incomingDate).tz(this.timeZone);
  }

  static latLongToGeohash(x, y, precision = 12) {
    if (_.isNil(x) || _.isNil(y)) {
      return null;
    }
    return geohash.encode(y, x, precision);
  }

  // eslint-disable-next-line class-methods-use-this
  normalize() {
    throw new Error('Not implemented.');
  }

  validate() {
    return validate(this.normalize(), this.constructor.schema);
  }
}


export default class IncidentNormalizer extends BaseNormalizer {
  constructor(payload, {
    timeZone = 'US/Eastern',
    projection = 'EPSG:4326',
    fdId = null,
    firecaresId = null,
    name = null,
    state = null,
    shiftConfig = {},
  } = {}) {
    super();
    this.payload = payload;
    this.timeZone = timeZone;
    this.projection = projection;
    this.fdId = fdId;
    this.firecaresId = firecaresId;
    this.name = name;
    this.state = state;
    // First use firecaresId to see if shift configuration exists in shiftly
    const shiftlyConfig = IncidentNormalizer.lookupShiftlyConfig(this.firecaresId);
    if (shiftlyConfig != null) {
      this.shiftConfig = shiftlyConfig;
    } else {
      this.shiftConfig = new ShiftConfiguration(shiftConfig);
    }
  }

  // eslint-disable-next-line class-methods-use-this
  static get schema() {
    return schemas.fire;
  }

  // eslint-disable-next-line class-methods-use-this
  normalize() {
    return _.omitBy({
      address: this.normalizeAddress(),
      description: this.normalizeDescription(),
      apparatus: this.normalizeApparatus(),
      fire_department: this.normalizeFireDepartment(),
      version: this.constructor.schema.version,
    }, _.isNil);
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeAddress() {
    throw new Error('Not implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeDescription() {
    throw new Error('Not implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeApparatus() {
    throw new Error('Not implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  combineEntries() {
    throw new Error('Not implemented.');
  }

  calculateShift(date) {
    return this.shiftConfig.calculateShift(date);
  }

  static calculateDuration(startTime, endTime) {
    return moment.duration(endTime.diff(startTime)).asSeconds();
  }

  static calculateUnitStatusExtendedData(unitStatus) {
    const times = {};

    const arr = _.values(unitStatus);

    let clearedPropeties = [];

    _.map([
      'available',
      'in_quarters',
      'available_radio',
      'available_mobile',
      'cleared'], key => clearedPropeties.push(_.get(unitStatus, `${key}`)));

    clearedPropeties = _.filter(clearedPropeties, prop => !_.isNil(prop));

    let cleared;
    if (clearedPropeties.length > 0) {
      cleared = _.minBy(clearedPropeties, o => moment(o.timestamp).valueOf());
    } else {
      cleared = _.maxBy(arr, o => moment(o.timestamp).valueOf());
    }

    let scene_left;
    if (unitStatus.transport_started) {
      scene_left = unitStatus.transport_started;
    } else {
      scene_left = cleared;
    }

    const requirements = {
      travel_duration: [unitStatus.arrived, unitStatus.enroute],
      turnout_duration: [unitStatus.enroute, unitStatus.dispatched],
      response_duration: [unitStatus.arrived, unitStatus.dispatched],
      on_scene_duration: [scene_left, unitStatus.arrived],
      event_duration: [cleared, unitStatus.dispatched],
      on_scene_to_transport_arrived_duration: [unitStatus.transport_arrived, unitStatus.arrived],
      transport_duration: [unitStatus.transport_arrived, unitStatus.transport_started],
      at_hospital_duration: [cleared, unitStatus.transport_arrived]
    };

    Object.entries(requirements).forEach(([key, value]) => {
      if (!_.every(value)) {
        return;
      }
      times[key] = IncidentNormalizer.calculateDuration(moment(value[1].timestamp),
        moment(value[0].timestamp));
    });
    return times;
  }

  static calculateDescriptionExtendedData(description) {
    const times = {};
    const requirements = {
      psap_answer_time_to_event_creation: [description.event_opened, description.psap_answer_time],
      psap_answer_time_to_first_dispatch: [
        description.first_unit_dispatched,
        description.psap_answer_time,
      ],
      psap_answer_time_to_first_arrival: [
        description.first_unit_arrived,
        description.psap_answer_time,
      ],
      event_duration: [description.event_closed, description.event_opened],
      response_duration: [description.first_unit_arrived, description.first_unit_dispatched],
    };

    Object.entries(requirements).forEach(([key, value]) => {
      if (!_.every(value)) {
        return;
      }

      times[key] = IncidentNormalizer.calculateDuration(moment(value[1]),
        moment(value[0]));
    });

    return times;
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeFireDepartment() {
    return {
      fd_id: this.fdId,
      firecares_id: this.firecaresId,
      name: this.name,
      state: this.state,
      timezone: this.timeZone,
    };
  }

  static toJSON(string) {
    return new Promise((resolve, reject) => {
      try {
        const js = JSON.parse(string);
        resolve(js || string);
      } catch (e) {
        try {
          const parser = new xml2js.Parser({ explicitArray: false });
          parser.parseString(string, (err, result) => resolve(result || string));
        } catch (err) {
          reject(err);
        }
      }
    });
  }

  static fromBytes(buffer, encoding = 'utf8', ...args) {
    return this.fromString(buffer.toString(encoding), ...args);
  }

  static fromString(string, ...args) {
    // eslint-disable-next-line consistent-return
    return new Promise((resolve, reject) => {
      try {
        return this.toJSON(string)
          .then(res => resolve(new this(res, ...args)));
      } catch (e) {
        reject(e);
      }
    });
  }

  static fromStrings(strings, ...args) {
    // eslint-disable-next-line consistent-return
    return Promise.map(strings, this.toJSON)
      .then(jsons => new this(this.combineEntries(jsons), ...args));
  }

  static fromFile(file, options = { encoding: 'utf-8', flag: 'r' }, ...args) {
    return new Promise((resolve, reject) => {
      fs.readFile(file, options, (err, data) => {
        if (err) { reject(err); }
        return this.fromString(data, ...args)
          .then(resolve);
      });
    });
  }

  static fromFiles(files, ...args) {
    // eslint-disable-next-line
    return Promise.map(files, (file) => {
      return new Promise((resolve, reject) => {
        fs.readFile(file, 'utf-8', (err, data) => {
          if (err) { reject(err); }
          resolve(data);
        });
      });
    })
      .then(jsons => this.fromStrings(jsons, ...args));
  }

  static lookupShiftlyConfig(firecaresId) {
    const shiftlyFactoryMethod = FirecaresLookup[firecaresId];
    let shiftlyConfig = null;
    if (shiftlyFactoryMethod != null) {
      shiftlyConfig = shiftlyFactoryMethod();
    }
    return shiftlyConfig;
  }
}

export class VehicleTelemetryNormalizer extends BaseNormalizer {
  constructor(payload, {
    timeZone = 'US/Eastern',
    projection = 'EPSG:4326',
    fdId = null,
    firecaresId = null,
    name = null,
    state = null,
  } = {}) {
    super();
    this.payload = payload;
    this.timeZone = timeZone;
    this.projection = projection;
    this.fdId = fdId;
    this.firecaresId = firecaresId;
    this.name = name;
    this.state = state;
  }

  // eslint-disable-next-line class-methods-use-this
  static get schema() {
    return schemas.vehicleTelemetry;
  }

  normalize() {
    const incident = this.normalizeIncident();
    const response = {
      version: this.constructor.schema.version,
      fire_department: this.normalizeFireDepartment(),
      apparatus: this.normalizeApparatus(),
      telemetry: this.normalizeTelemetry(),
    };

    if (!_.isEmpty(incident.incident_number)) {
      response.incident = incident;
    }

    return response;
  }

  normalizeFireDepartment() {
    return {
      fd_id: this.fdId,
      firecares_id: this.firecaresId,
      name: this.name,
      state: this.state,
      timezone: this.timeZone,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeApparatus() {
    throw new Error('Not implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeIncident() {
    throw new Error('Not implemented.');
  }

  // eslint-disable-next-line class-methods-use-this
  normalizeTelemetry() {
    throw new Error('Not implemented.');
  }
}

export { helpers };
