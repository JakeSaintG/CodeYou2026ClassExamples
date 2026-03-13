// Given a string of characters, return true if
// the string is a palindrome

const string = "racecar";
const string2 = "mom";
const string3 = "cat";

/* PSUEDOCODE
define a function
- takes a string as a parameter
- take the input string and reverse it
    - turn input into array 
    - reverse the array
    - join the array
    - compare input to processed string
- return result
*/

// PHASE 1
function isPalindrome(word) {
    let isPal = false;
    
    const split = word.split('');
    const reverse = split.reverse();
    const join = reverse.join('')
    
    if (join === word) {
        isPal = true;
    }

    return isPal;
}

// PHASE 2:
function isPalindrome2(word) {
    const isPal = word.split('').reverse().join('') === word
    return isPal;
}

// PHASE 3:
function isPalindrome3(word) {
    return word.split('').reverse().join('') === word;
}

// PHASE 4:
const isPalindrome4 = (w) => w.split('').reverse().join('') === w;

console.log('string: ' + string)
console.log(isPalindrome(string))
console.log('string2: ' + string2)
console.log(isPalindrome(string2))
console.log('string3: ' + string3)
console.log(isPalindrome(string3))

console.log('string: ' + string)
console.log(isPalindrome2(string))
console.log('string2: ' + string2)
console.log(isPalindrome2(string2))
console.log('string3: ' + string3)
console.log(isPalindrome2(string3))

console.log('string: ' + string)
console.log(isPalindrome3(string))
console.log('string2: ' + string2)
console.log(isPalindrome3(string2))
console.log('string3: ' + string3)
console.log(isPalindrome3(string3))

console.log('string: ' + string)
console.log(isPalindrome4(string))
console.log('string2: ' + string2)
console.log(isPalindrome4(string2))
console.log('string3: ' + string3)
console.log(isPalindrome4(string3))
