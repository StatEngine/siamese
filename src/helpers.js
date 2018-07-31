
const PRIORITY_DISPATCH_REGEX = /([0-9]+?)([ABCDEO])([0-9a-z]*)/;

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


export default {
  priorityDispatch: {
    split,
  },
};
