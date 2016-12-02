/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 4;
  var size = 0;
  
  result._resize = function(newLimit) {
    var oldStorage = storage.slice(0);
    storage = [];
    size = 0;
    console.log('resize to', newLimit);
    // console.log(storage);
    // console.log(oldStorage);
    for(var i=0; i<oldStorage.length; i++) {
      for(var j=0; oldStorage[i] && j<oldStorage[i].length; j++) {
        var key = oldStorage[i][j][0];
        var value = oldStorage[i][j][1];
        
        storageLimit = newLimit;
        // var index = getIndexBelowMaxForKey(key, newLimit);
        // console.log(key, value);
        this.insert(key, value);
      }
    }
  };
  
  result.insert = function(key, val) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(!storage[index]) {
      // console.log('inserted first')
      storage[index] = [[key, val]];
      size++;
    } else {
      var exists = false;
      for(var i=0; i<storage[index].length; i++) {
        if(storage[index][i][0] === key) {
          storage[index][i][1] = val;
          exists = true;
          break;
        }
        if(!exists){
          storage[index].push([key, val]);
          size++;
        }
      }
    }
    // console.log('table after insert...', storage);
    if(size > storageLimit * 0.75) {
      console.log('GROW!!!');
      this._resize(storageLimit * 2);
    }
  };

  result.retrieve = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]) {
      var res;
      storage[index].forEach(function(pair) {
        if(pair[0] === key) {
          res = pair[1];
        }
      });
      return res;
    }
  };

  result.remove = function(key) {
    var index = getIndexBelowMaxForKey(key, storageLimit);
    if(storage[index]) {
    for(var i=0; i<storage[index].length; i++){
      if(storage[index][i][0] === key) {
        // console.log(storage[index]);
        // console.log('remove', key);
        var removed = storage[index].splice(i, 1);
        if(storage[index].length < 1) {
          storage[index] = undefined;
        }
        size--;
          if(size < storageLimit * 0.25) {
            // console.log('SHRINK!!!');
            this._resize(storageLimit / 2);
          }
          break;
      }
    }
    }
    // console.log('table after remove...', storage);

  };

  return result;
};