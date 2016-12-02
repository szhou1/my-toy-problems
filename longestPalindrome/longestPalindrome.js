/**
* Implement a function that finds the longest palindrome in a given string.
* For example, in the string "My dad is a racecar athlete", the longest
* palindrome is "a racecar a". Count whitespaces as valid characters. Other
* palindromes in the above string include "dad", "ete", " dad " (including
* whitespace on each side of dad).
*/
var isPalindrome = function (string) {
  return string === string.split('').reverse().join('');
}

var longestPalindrome = function (string) {
  var longest = '';

  var findLongest = function(str) {
    if(str.length === 0 || str.length <= longest.length) {
      return;
    }
    // console.log('str: ', str);
    if(isPalindrome(str) && str.length > longest.length) {
      console.log('FOUND PALINDROME!!!', str);
      longest = str;
      return;
    }
    var rightRemainder = str.slice(1);
    var leftRemainder = str.slice(0, -1);

    findLongest(rightRemainder);
    // console.log('left remainder')
    findLongest(leftRemainder);
  }
  findLongest(string);

  return longest;
};

// console.log(isPalindrome('dad') === true);
// console.log(isPalindrome('not a palindrome')===false)

// console.log(longestPalindrome('my dad is a racecar athelete something or other'));
// console.log('<' + longestPalindrome('my dad is a racecar a ') + '>');

// console.log(longestPalindrome('my dad is a racecar athelete'));