'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
  let intersection = new Array();
  for(var eA of collectionA){
    for(var eB of collectionB){
      if(eA === eB)
        intersection.push(eA);
    }
  }
  return intersection;
}
