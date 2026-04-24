// DISCUSSING ARROW FUNCTIONS

/*
Besides syntax, there is little difference between arrow functions and traditional functions.
https://www.geeksforgeeks.org/javascript/difference-between-regular-functions-and-arrow-functions/
- Traditional functions do have access to an "arguements" object and can be hoisted.
  - Both of which can be considered "fragile" and their use is illadvised.
- Arrow functions 
  - Their main benefit is being more concise when used as a callback
*/

// Example of tradition function declaration
function nonArrowFunction() {
    console.log(`I'm a non arrow function`);
}

// Example of an arrow function
const arrowFunction = () => {
    console.log(`I'm an arrow function`);
}

console.log(nonArrowFunction());
console.log(arrowFunction());

// Demonstrating an arrow function in an Immediately Invoked Function Expression (iife)
(
    () => {
        console.log('iife')
    }
)();

// An anonymous arrow function used as a callback in setTimeout
setTimeout(() => {
    console.log('from timeout')
}, 5000);

// An anonymous tradition function used as a callback in setTimeout
setTimeout(function () {
    console.log('from timeout 2')
}, 5000);

// Declaring our callback function outside of setTimeout (arrow)
const executeMe = () => {
    console.log('from timeout 3')
}

// Use declared callback function in setTimeout.
setTimeout(executeMe, 5000);
