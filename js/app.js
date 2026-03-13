// Given a string of characters, return true if
// the string is a palindrome

const string = "racecar";
const string2 = "mom";
const string3 = "cat";

/*
define a function
- takes a string as a parameter
- take the input string and reverse it
    - 
- return the reversed string 

*/

isPalindrome = (w) => w.split('').reverse().join('') ? true : false;


// console.log('string:')
// console.log(isPalindrome(string))
// console.log('string3:')
// console.log(isPalindrome(string3))
