const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let activity=Number(sampleActivity)
  if(isNaN(activity)||activity>MODERN_ACTIVITY||activity<=0||typeof(sampleActivity)!='string'){return false}
  let N0=MODERN_ACTIVITY
  let t5=HALF_LIFE_PERIOD
  let k=0.693/t5;
  let res= (Math.log(N0/activity))/k
  return Math.ceil(res)
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  dateSample
};
