'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  for(var e of objectB.value){
    for(var obj of collectionA){
      if(e === obj.key){
        let count = Math.floor(obj.count / 3);
        obj.count -= count;
      }
    }
  }
  return collectionA;
}
