import _ from 'lodash';
import CODES from './priorityDispatchCodes';

const PRIORITY_DISPATCH_REGEX = /([0-9]+?)([ABCDEO])([0-9a-z]*)/;
const SUBDETERMINATE_REGEX = /([0-9]+)([a-z]*)/;

function split(code) {
  /**
  * @param {string} code - Priority dispatch code (eg: 32B).
  * https://wiki.radioreference.com/index.php/Priority_Dispatch_Codes
  */

  const check = code.match(PRIORITY_DISPATCH_REGEX);

  if (!check) {
    return {};
  }

  const [, protocol, determinate, subDeterminate] = check;

  return {
    protocol,
    determinate,
    subDeterminate,
  };
}

function getProtocolDescription(protocol) {
  if (protocol) {
    return _.get(CODES, `[${Number(protocol).toString()}]description`);
  }
  return null;
}

function getSubDeterminateDescription(protocol, determinate, subDeterminate) {
  if (protocol && determinate && subDeterminate) {
    const [, noSuffix] = subDeterminate.toString().match(SUBDETERMINATE_REGEX);
    return _.get(CODES, `[${Number(protocol).toString()}]determinates[${determinate}]subdeterminants[${Number(noSuffix).toString()}.description]`);
  }
  return null;
}

export default {
  priorityDispatch: {
    split,
    getProtocolDescription,
    getSubDeterminateDescription,
  },
};
