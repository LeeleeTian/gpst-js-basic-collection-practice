'use strict';

module.exports = function countSameElements(collection) {
  let statistic = new Array();
  for(var element of collection){
      let [flag, count] = [1, 1];
      (element.includes('-'))? element = element.split('-'):
      (element.includes(':'))? element = element.split(':'):
      (element.includes('['))? element = element.split('['): null;
      (element.length !== 1)? (element[1].includes(']'))? 
      count = parseInt(element[1].slice(0, element[1].length - 1)) : count = parseInt(element[1]): null;
      element = element[0];
      if(statistic.length !== 0){
          for(var obj of statistic){
              if(obj.name === element){
                  obj.summary += count;
                  flag = 0;
                  break;
              }
          }
      }
      (flag)? statistic.push({name: element, summary: count}) : null;
  }
  return statistic;
}
