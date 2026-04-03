/*
This exercise came from a question about ternary operators. The goal is to set
foo/fooTernary to 1 or 100 based on the bar/barTernary variable. The first 
example is with the traditional is/else block and the second uses the 
aforemention ternary operator.

Mozilla Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator
*/

// goal: set foo to 1 if bar is 10, else set to 100 using an if/else block
let foo = 0;
const bar = 10;

if ( bar === 10 ) {
    foo = 1;
} else {
    foo = 100;
}

console.log(foo);

// goal: set fooTernary to 1 if barTernary is 10, else set to 100 using the ternary operator
let fooTernary = 0;
const barTernary = 10;

fooTernary = barTernary === 10 ? 1 : 100;

console.log(fooTernary);
