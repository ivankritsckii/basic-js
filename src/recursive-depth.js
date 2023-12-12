const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 /*for(let i=0; a < arr.length; i++){
      return new DepthCalculator().calculateDepth(arr)
    }*/
    /*function counter(array) {
      for (let i = 0; i < arr.length; i += 1) {
        if (Array.isArray(array[i])) {
          count += 1;
          console.log(count)
          return counter(array[i]);
        }
      }
    }*/

    let count = 0;
    let res = 1;
class DepthCalculator {
  calculateDepth(arr, starter = 0) {
    if(starter === 0) {res = 1}
    if(arr.length === 0){arr.length = 1}
    for(let i=0;i<arr.length; i+=1) {
      if (Array.isArray(arr[i])) {console.log(count);
        count += 1;
        this.calculateDepth(arr[i], count)
      }
      if (i === arr.length - 1 || arr.length === 0){
      if(count > res) {res = count};
      count = 1;
      }
    }
    return res;
  }
}

module.exports = {
  DepthCalculator
};
