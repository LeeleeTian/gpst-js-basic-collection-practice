'use strict';

module.exports = function countSameElements(collection) {
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
