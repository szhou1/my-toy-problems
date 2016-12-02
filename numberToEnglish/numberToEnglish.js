/**
* Extend the Number prototype with a new method called `toEnglish`.
* It should return the number as a string using English words.
* Examples:
*   (7).toEnglish(); // > "seven"
*   (575).toEnglish(); // > "five hundred seventy-five"
*   (78193512).toEnglish(); // > "seventy-eight million one hundred ninety-three thousand five hundred twelve"
*
* Extra credit: Make your function support decimals.
* Example:
*   (150043.273).toEnglish() // > "one hundred fifty thousand forty-three and two hundred seventy three thousandths"
*
 */

var numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
var numbersToPlace = {
  19: 'quintillion',
  16: 'quadrillion',
  13: 'trillion',
  10: 'billion',
  7: 'million',
  4: 'thousand',
  3: 'hundred',
  2: 'ten',
  1: ''
};

Number.prototype.toEnglish = function () {

  var res = [];
  var processNum = function(num, place){
    console.log("----input: " + num)
    var len = num.length;
    if(len === 0){
      return;
    }
    else if((len-1) % 3 === 0){ // thousands
      console.log("thousands")
      console.log("len: " + len)
      if(num[0] != 0) {
        res.push(numbersToWords[num[0]] + " " + (place ? place : numbersToPlace[len]));
      }
    }
    else if((len-2) % 3 === 0){ // tens
      console.log(num)
      var tensAndOnes = num.substring(0,2);
      if(tensAndOnes < 19){
        res.push(numbersToWords[tensAndOnes]);
        num = num.slice(1);
      } else {
        var tens = Math.floor(tensAndOnes/10)*10;
        var ones = tensAndOnes % 10;
        if(ones !== 0) {
          res.push(numbersToWords[tens] + "-");
          processNum(ones + "", numbersToPlace[len-1]);
        } else {
          res.push(numbersToWords[tens]);
          processNum(ones + "", numbersToPlace[len-1]);
        }
      }
      num = num.slice(1)
    }
    else if(len % 3 === 0){
      console.log("hundreds")
      res.push(numbersToWords[num[0]] + " " + numbersToPlace[3]);
    }
    else if(len > 3){
      res.push(numbersToWords[num[0]] + " " + numbersToPlace[len]);
    }
    // console.log("num: " + num)
    num = num.slice(1);
    processNum(num);
  }
  
  processNum(this.toString());
  
  return res.join(' ');
};

