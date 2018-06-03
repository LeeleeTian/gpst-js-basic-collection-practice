'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  for(var e of objectB.value){
    for(var obj of collectionA){
      if(e === obj.key)
        obj.count--;
    }
  }
  return collectionA;
}
