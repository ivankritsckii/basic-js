const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let resString = '';
  for (let j = 0; j < str.length; j++) {
    let count = 0
    for (let i = 0; i < str.length; i++) {
      if (str[j] === str[i]) {
        count ++
      }
      if  (count > 0 && str[j] !== str[i]) {
        if (count === 1) {count = ''}
        resString += `${count}${str[j]}`;
        if (count === '') {count = 1}
        j += count-1;
        count = 0;
        i = str.length-1;
      }
      if (j === str.length-1 && i===j && count > 0) {
        if (count === 1) {count = ''}
        resString += `${count}${str[j]}`;
      }
    }
  }
  return resString;
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  encodeLine
};
