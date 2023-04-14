const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members){return false}
  let ArrRes=[];
  let deleteSpace=(x)=>{
    for(let j=0;j<x.length; j++){
      if(x[j]!=' '){
        let a=x[j].toUpperCase()
        ArrRes.push(a)
        return
      }
    }
  }
  for(let i=0; i<members.length; i++){
    if(typeof(members[i])=='string'){
      deleteSpace(members[i])
    }}
    if(ArrRes.length==0){
      return false
    }
    ArrRes.sort()
    let res=''
    ArrRes.forEach((item)=>{
      res=res+item
    })
  return res 
  }


module.exports = {
  createDreamTeam
};
