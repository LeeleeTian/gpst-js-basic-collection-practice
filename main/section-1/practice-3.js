'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let intersection = new Array();
  for(var eA of collectionA){
    for(var eB of objectB.value){
      if(eA === eB)
        intersection.push(eA);
    }
  }
  return intersection;
}
