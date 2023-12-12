const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){throw new Error("'arr' parameter must be an instance of the Array!")}
  let resArr=arr.map((item) => item);
  let discardNext=(array, index)=>{
    if(array.length>=index+1){
      array[index]='splice Me';
      array[index+1]='splice Me';
  }
    else{array.splice(index, 1)}
  }
  let discardPrev=(array, index)=>{
    if(index!=0){
      array[index]='splice Me';
      array[index-1]='splice Me';
  }
    else{array.splice(index, 1)}
  }
  let doubleNext=(array, index)=>{
    if(array.length>index+1){array.splice(index, 1, array[index+1])}
    else{array.splice(index, 1)}
  }
  let doublePrev=(array, index)=>{
    if(index!=0){array.splice(index, 1, array[index-1])}
    else{array.splice(index, 1)}
  }
for(let i =0; i<arr.length; i++){
  if(arr[i]=='--discard-next'){
    discardNext(resArr, i)
  }
  else if (arr[i]=='--discard-prev'){
    discardPrev(resArr, i)
  }
  else if(arr[i]=='--double-next'){
    doubleNext(resArr, i)
  }
  else if(arr[i]=='--double-prev'){
    doublePrev(resArr, i)
  }
}
return resArr.filter(item => item !== 'splice Me')
}

module.exports = {
  transform
};
