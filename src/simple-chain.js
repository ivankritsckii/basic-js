const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
let res=''
const chainMaker = {
  getLength() {
    let a= res
    res=''
    return a.length
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  addLink(value) {
    if(value==undefined){value=''}
    if(res.length==0){res='( ' + value+ ' )'}
    else{res=res +'~~' + '( ' + value+ ' )'}
    return this
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  removeLink(position) {
    let arr=res.split('~~')
    if(position!==Math.floor(position)||position>arr.length||position<1){
      res=''
      let ErorMassage=new Error('You can\'t remove incorrect link!')
      return ErorMassage}
      else{
    arr.splice(position-1, 1)
    res=arr.join('~~')
    return this}
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    let arr=res.split('~~')
    arr.reverse()
    res=arr.join('~~')
    return this
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    let a=res
    res=''
    return a
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = {
  chainMaker
};
