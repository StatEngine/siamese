
const PRIORITY_DISPATCH_REGEX = /([0-9]+?)([ABCDEO])([0-9a-z]*)/;
const SUBDETERMINATE_REGEX = /([0-9]+)([a-z]*)/;

import CODES from './priorityDispatchCodes';
import _ from 'lodash';

function split(code) {
  /**
  * @param {string} code - Priority dispatch code (eg: 32B).
  * https://wiki.radioreference.com/index.php/Priority_Dispatch_Codes
  */

  const check = code.match(PRIORITY_DISPATCH_REGEX);

  if (!check) {
    return {};
  }

  const [fullMatch, protocol, determinate, subDeterminate] = check;

  return {
    protocol,
    determinate,
    subDeterminate,
  };
}

function getDeterminateDescription(determinate) {
  if (determinate) {
    return _.get(CODES, `[${Number(determinate).toString()}]description`)
  }
}

function getSubDeterminateDescription(determinate, priority, subDeterminate) {
  if (determinate && priority && subDeterminate) {
    const [match, noSuffix, suffix] = subDeterminate.toString().match(SUBDETERMINATE_REGEX);
    return _.get(CODES, `[${Number(determinate).toString()}]priorities[${priority}]subdeterminants[${Number(noSuffix).toString()}.description]`);
  }
}

export default {
  priorityDispatch: {
    split,
    getDeterminateDescription,
    getSubDeterminateDescription,
  },
};
