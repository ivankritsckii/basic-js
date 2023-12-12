const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...n.toString()]
  let res = 0;
  for(let i=0; i<arr.length; i++){
    let q= arr[i];
    arr[i]=''; 
    let t = arr.join(''); 
    if (+t>res) {
      res = +t
    }
    arr[i]=q;}
  return res;
}

module.exports = {
  deleteDigit
};
