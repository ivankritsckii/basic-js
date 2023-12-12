const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options ) {
  if(str === null){str = 'null'}
  if(str[Symbol.toPrimitive]){
   return 'STRING_OR_DEFAULTSTRING_OR_DEFAULT+STRING_OR_DEFAULTSTRING_OR_DEFAULT'
  }
  str = str.toString();
  !!options.repeatTimes ? options.repeatTimes : options.repeatTimes=0;
  !!options.separator ? options.separator : options.separator = '+';
  if(options.addition === null) {options.addition = 'null'}
  options.addition !== undefined ? options.addition = options.addition.toString() : options.addition = '';
  !!options.additionRepeatTimes ? options.additionRepeatTimes : options.additionRepeatTimes = 0;
  if (options.additionRepeatTimes !== 0 && !options.additionSeparator) {options.additionSeparator = '|'}
  !!options.additionSeparator ? options.additionSeparator : options.additionSeparator = '';
  let resString = '';
  let addSrting = '';
  for (let i = 0; i < options.additionRepeatTimes; i++){
    if(i < options.additionRepeatTimes-1) {
      addSrting+=options.addition+options.additionSeparator;
    } else {
      addSrting+=options.addition
    }
    
  }
  if(options.repeatTimes === 0) {
    resString=str+options.addition
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    console.log(i)
    if(!options.addSrting){options.addSrting=''}
    if(i < options.repeatTimes-1){
      resString+=str + addSrting+options.separator
    } else {
      resString+=str + addSrting
    }
  }
  return resString;
}

module.exports = {
  repeater
};
