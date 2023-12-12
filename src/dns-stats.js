const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let obj = {};
  domains.forEach((item) => {
    item = item.split('.').reverse();
    for (let i = 0; i < item.length; i+=1) {
      let count = 0;
      domains.forEach((item1) => {
        item1.includes(item[i]) ? count++ : count;
      })
      let resString = ''
      for(let j = 0; j <= i; j++) {
        resString = resString + '.' + item[j]
      }
      !!obj[resString] ? obj[resString] : obj[resString] = count
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
