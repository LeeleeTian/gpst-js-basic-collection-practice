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
      let [flag, count] = [1, 1];
      element = element.split('-');
      (element.length !== 1)? count = parseInt(element[1]): null;
      element = element[0];
      if(statistic.length !== 0){
          for(var obj of statistic){
              if(obj.key === element){
                  obj.count += count;
                  flag = 0;
                  break;
              }
          }
      }
      (flag)? statistic.push({key: element, count: count}) : null;
  }
  return statistic;
}