'use strict';

module.exports = function createUpdatedCollection(collectionA, objectB) {
  collectionA = countSameElements(collectionA);
  return findSameAndMinus(collectionA, objectB);
}

function findSameAndMinus(collectionA, objectB) {
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

function countSameElements(collection) {
  let statistic = new Array();
  for(var element of collection){
      let flag = 1;
      if(statistic.length !== 0){
          for(var obj of statistic){
              if(obj.key === element){
                  obj.count++;
                  flag = 0;
                  break;
              }
          }
      }
      (flag)? statistic.push({key: element, count: 1}) : null;
  }
  return statistic;
}