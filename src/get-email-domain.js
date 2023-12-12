const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let arr  = [...email];
  for (let i=arr.length; i>0 ; i--){
    if (arr[i]==='@'){
      arr.splice(0, i+1)
      i=0
    }
  }
    return arr.join('')
}

module.exports = {
  getEmailDomain
};
