import 'babel-polyfill';
import {
  expect,
} from 'chai';
import IncidentNormalizer from '../src';

describe('IncidentNormalizer', () => {
  it('should not geohash invalid coordinates', () => {
    expect(IncidentNormalizer.latLongToGeohash(undefined, 1)).to.be.null;
    expect(IncidentNormalizer.latLongToGeohash(null, 1)).to.be.null;
    expect(IncidentNormalizer.latLongToGeohash(1, undefined)).to.be.null;
    expect(IncidentNormalizer.latLongToGeohash(1, null)).to.be.null;

    // although unlikely 0,0 is valid
    expect(IncidentNormalizer.latLongToGeohash(0, 0)).to.equal('7zzzzzzzzzzz');
  });

  it('should retrieve shiftly configurations for valid ids', () => {
    expect(IncidentNormalizer.lookupShiftlyConfig('90552')).to.not.equal(null);
    expect(IncidentNormalizer.lookupShiftlyConfig('05102')).to.not.equal(null);
    expect(IncidentNormalizer.lookupShiftlyConfig('000')).to.equal(null);
  });

  it('calculateUnitStatusExtendedData should calculate event_duration based on latest timestamp (and calculate the other durations correctly)', () => {
    const unitStatus = {
      dispatched: {
        latitude: 38.8703695581824,
        longitude: -77.15635501332166,
        timestamp: '2017-12-30T18:37:11-05:00',
      },
      enroute: {
        latitude: 38.8703695581824,
        longitude: -77.15635501332166,
        timestamp: '2017-12-30T18:37:42-05:00',
      },
      staging: {
        latitude: 38.84776403520299,
        longitude: -77.13305689919378,
        timestamp: '2017-12-30T18:41:42-05:00',
      },
      arrived: {
        latitude: 38.84776403520299,
        longitude: -77.13305689919378,
        timestamp: '2017-12-30T18:43:01-05:00',
      },
      patient_contact: {
        latitude: 38.84776403520299,
        longitude: -77.13305689919378,
        timestamp: '2017-12-30T18:45:01-05:00',
      },
      transport_started: {
        latitude: 38.847789177196,
        longitude: -77.13341200471721,
        timestamp: '2017-12-30T18:50:57-05:00',
      },
      transport_arrived: {
        latitude: 38.88785485040848,
        longitude: -77.12726809345266,
        timestamp: '2017-12-30T19:00:31-05:00',
      },
      cleared: {
        latitude: 38.88785485040848,
        longitude: -77.12726809345266,
        timestamp: '2017-12-30T19:17:31-05:00',
      },
    };

    const times = IncidentNormalizer.calculateUnitStatusExtendedData(unitStatus);
    expect(times.turnout_duration).to.equal(31);
    expect(times.travel_duration).to.equal(240);
    expect(times.response_duration).to.equal(271);
    expect(times.event_duration).to.equal(2420);
    expect(times.at_hospital_duration).to.equal(1020);
    expect(times.transport_duration).to.equal(574);
    expect(times.on_scene_duration).to.equal(555);
    expect(times.staging_duration).to.equal(79);
    expect(times.patient_contact_to_transport_arrived_duration).to.equal(930);
    expect(times.on_scene_to_transport_arrived_duration).to.equal(1129);
    expect(times.on_scene_to_patient_contact).to.equal(199);
  });

  it('calculateUnitStatusExtendedData should calculate event_duration based on earliest cleared timestamp', () => {
    const unitStatus = {
      dispatched: {
        latitude: 38.8703695581824,
        longitude: -77.15635501332166,
        timestamp: '2017-12-30T18:37:11-05:00',
      },
      enroute: {
        latitude: 38.8703695581824,
        longitude: -77.15635501332166,
        timestamp: '2017-12-30T18:37:42-05:00',
      },
      arrived: {
        latitude: 38.84776403520299,
        longitude: -77.13305689919378,
        timestamp: '2017-12-30T18:43:01-05:00',
      },
      cleared: {
        latitude: 38.847789177196,
        longitude: -77.13341200471721,
        timestamp: '2017-12-30T18:50:57-05:00',
      },
      available: {
        latitude: 38.847789177196,
        longitude: -77.13341200471721,
        timestamp: '2017-12-30T19:50:57-05:00',
      },
    };

    const times = IncidentNormalizer.calculateUnitStatusExtendedData(unitStatus);
    expect(times.event_duration).to.equal(826);
  });
});
