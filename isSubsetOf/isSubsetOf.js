/*
Make an array method that can return whether or not a context array is a
subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 * 
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true 
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  var cache = {};

  arr.forEach(function(value) {
    cache[value] = JSON.stringify(value);
  });

  console.log(this);
  console.log('cache', cache);

  var isSubsetOf = true;
  this.forEach(function(value) {
    console.log('!!!', value);
    if(!cache.hasOwnProperty(value)){
      isSubsetOf = false;
    }
  });

  return isSubsetOf;

};


var a = ['commit','push', 'push'];
var res = a.isSubsetOf(['commit','rebase','push','blame']); // true
console.log(res);
var a = [[1], [2], [1,2]];
var res = a.isSubsetOf([[1], [2], [1,2]]); // true
console.log(res);
var a = [{a: 1, b: 3}];
var res = a.isSubsetOf([{a : 1, b: 2}, {c: 3}]); // true
console.log(res);

// NOTE: You should disregard duplicates in the set.
// var b = ['merge','reset','reset']
// b.isSubsetOf(['reset','merge','add','commit']) // true 