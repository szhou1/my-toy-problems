/**
 * A prime number is a whole number that has no other divisors other than
 * itself and 1. Write a function that accepts a number and returns true if it's
 * a prime number, false if it's not.
 */

var primeTester = function(n) {
  if(typeof n !== 'number' || n <= 1 || n % 1 !== 0){
    // n isn't a number or n is less than 1 or n is not an integer
    return false;
  }
  // TODO: return true if n is prime, false otherwise
  for(var i = 2; i<n; i++){
  	if(n % i === 0){
  		return false;
  	}
  }
  
  return true;
};


/* Extra credit: Write a function that generates a list of all prime numbers
 * in a user-specified range (inclusive). If you're not quite sure where to start,
 * check out the Sieve of Eratosthenes on Wikipedia. (And if you're feeling
 * saucy, check out the Sieve of Atkin.)
 */

var primeSieve = function (start, end) {
	
	var sieve = function(n){
		var arr = [];
		for(var i=2; i<=n; i++){
			arr[i] = true;
		}

		for(var i = 2; i<Math.sqrt(n); i++){
			if(arr[i]){
				for(var j = i*i; j<=n; j+=i){
					arr[j] = false;
				}
			}
		}

		var res = [];
		arr.forEach(function(value, i){
			if(value) res.push(i);	
		});
		return res;
	}

	console.log("end",sieve(end))
	var end = sieve(end);
	var res = [];
	end.forEach(function(value){
		if(value >= start) res.push(value);
	});

	return res;
};