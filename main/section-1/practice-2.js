'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let intersection = new Array();
  for(let i = 0; i < collectionA.length; i++){
    for(let j = 0; j < collectionB[0].length; j++){
      if(collectionA[i] === collectionB[0][j])
        intersection.push(collectionB[0][j]);
    }
  }
  return intersection; 
}
