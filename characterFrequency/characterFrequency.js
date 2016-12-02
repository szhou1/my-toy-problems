/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  var arr = string.split('');
  var result;
  //console.log(arr)
  var obj = {};
  arr.forEach(function(c){
    if(obj[c]){
      obj[c] = obj[c] + 1;
    } else {
      obj[c] = 1;
    }
  });
  //console.log(obj);
  
  var countArr = [];
  for(var key in obj){
    countArr.push([key, obj[key]]);
  }
  //console.log(countArr)
  
  countArr = sortByChar(countArr);
  //console.log(countArr)
  countArr = sortByCount(countArr);
  console.log(countArr)
  
  return countArr;
};

function sortByChar(countArr, targetInd) {
  for(var i=0; i<countArr.length; i++){
    var j = i;
    while(j>0 && countArr[j-1][0] > countArr[j][0]){
      // console.log("swap")
      var temp = countArr[j];
      countArr[j] = countArr[j-1];
      countArr[j-1] = temp;
      j--;
    }
  }
  return countArr;
}

function sortByCount(countArr, targetInd) {
  for(var i=0; i<countArr.length; i++){
    var j = i;
    while(j>0 && countArr[j-1][1] < countArr[j][1]){
      // console.log("swap")
      var temp = countArr[j];
      countArr[j] = countArr[j-1];
      countArr[j-1] = temp;
      j--;
    }
  }
  return countArr;
}