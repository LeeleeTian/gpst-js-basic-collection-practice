'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  let intersection = new Array();
  for(var obj of collectionA){
    for(var e of objectB.value){
      if(obj.key === e)
        intersection.push(e);
    }
  }
  return intersection;
}
