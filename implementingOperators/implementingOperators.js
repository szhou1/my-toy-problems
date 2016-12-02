// Implement multiply, divide, and modulo using only the addition and
// subtraction operators. start off my assuming all inputs are integers
//
// Step 2: Make divide produce answers to three decimal places
// (e.g. 2/3 => 0.667).
//
// Extra credit: Make multiply work with decimals
// (e.g. multiply(2.5, 10.2)
//
// Terror mode: Re-implement all three functions using only bitwise operators.


var multiply = function(x, y) {
  if(y === 0 || x === 0) {
    return 0;
  }
  // one of them negative?
  if( (x>0 && y<0) || (x<0 && y>0) ){
    var negative = true;
  }
  x = Math.abs(x);
  y = Math.abs(y);
  
  var res = 0;
  for(var i=0; i<y; i++) {
    res += x;
  }
  negative ? res = '-' + res : res;
  // console.log(res)
  return parseInt(res);
};

var divide = function(x, y) {
  var rem = modulo(x, y);
  var count = 0;
  // if(x > y )
  for(var i=y; x>=i; i = i+i) {
    // console.log(x,y)
    count++;
  }

  // console.log('rem', rem);
  

  return count;

};

var modulo = function(x, y) {
  var i = x;
  while(i>=y) {
    i=i-y;
  }
    // console.log(i)
  return i;
};


// console.log(multiply(-3, 2));
// console.log(divide(2, 3));
// console.log(modulo(5, 2));