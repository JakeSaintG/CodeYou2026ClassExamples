/* ⬇️ DISCUSSION ON RETURN VS CONSOLE.LOG ⬇️*/
// Executed immediately as part of "global scope"
console.log('hello world');

// Stored in memory for reuse later.
function foo(a, b) {
    return a + b;
}

// Stored in memory for reuse later.
function bar() {
    // Get a reference to a p element with an id='bar'.
    const p = document.getElementById('bar');

    // Assign the style property's color property to 'green'.
    // Like having CSS of: #bar {color: green}
    p.style.color = 'green';

    // return nothing.
}

// Using the stored foo() function and logging the output in different ways
const logMe = foo(3,4);
console.log(logMe); // output: 7

console.log(foo(3,5)); // output: 8
console.log(foo(3,6)); // output: 9

// Using foo() to alter something on the page.
// Overwriting the contents of the p element with id='foo'.
document.getElementById('foo').innerHTML = foo(1,2)

// Calling the bar() function that does not return anything.
bar()
/* ⬆️ DISCUSSION ON RETURN VS CONSOLE.LOG ⬆️*/


/* ⬇️ DISCUSSION ON ARROW FUNCTIONS ⬇️*/
// not an arrow function
function notArrow(name) {
    return `hi ${name}`;
}

// arrow function
const arrow = (name) => `hi ${name}`;

// Use both functions
console.log(notArrow('Ash Ketchum'));
console.log(arrow('Ash Ketchum'));
/*
They are functionally the same but arrow functions are used in
other places like setTimeout(). It's good to familiarise yourself
with the syntax.
*/ 

/* ⬆️ DISCUSSION ON ARROW FUNCTIONS ⬆️*/
