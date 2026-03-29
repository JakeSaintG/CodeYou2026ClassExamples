/*
Bonus javascript! 

IIFYs! Immediately Invoked Function Expressions
- also known as "self-executing anonymous function"

An IIFY contains two major parts:
    - The function expression. 
        - What the code actually does.
        - This code usually needs to be enclosed in parentheses in order function.
    - An immediate invokation in the form of another set of parantheses. 
        - Arguments may be provided, though IIFEs without arguments are more common.

Examples:
    (function)(args);
    (() => console.log('hello world')))();
    ((arg) => console.log(arg)))('hello world');

IIFEs are a often used to execute statement in their own scope. They can return information or 
execute code in a "fire and forget" kind of way.

Use cases:
    - Avoid the use of global variables and code execution.
    - Computing values with complex logic
        - Like using multiple statements as a single expression
        - Setting application state on load


All of the below functions are doing the same thing in a different format. Don't worry about what
is going on. We'll get there soon.
*/

// Non-arrow function with IIFY-scoped variable
(function ping() {
    const pingSuccessKeyWord = 'healthy'; // example of IIFY-scoped variable; not in the global scope. 
    
    fetch(`http://localhost:3000/ping`)
        .then((r) => r.status)
        .then((status) => {
            if (status === 200) {
                console.log(`Server ${pingSuccessKeyWord}`);
                document.getElementById("server_status").innerText = pingSuccessKeyWord;
            } else {
                console.log(`server not ${pingSuccessKeyWord}: ${status}`);
                document.getElementById("server_status").innerText = `Not ${pingSuccessKeyWord}`;
                document.getElementById("server_banner").className = `unhealthy`;
            }
        })
        .catch((error) => {
            console.log(`not ${pingSuccessKeyWord}: ${error}`);
            document.getElementById("server_banner").className = `unhealthy`;

            // Typically, it's better to have a "Security through obscurity" approach and avoid
            // dumping error messages where users can see them. This is a class exercise, though. 
            document.getElementById("server_status").innerText = `Error\r\n ${error}`;
        })
    }
)();

// Arrow function with IIFY-scoped variable
(() => {
    const pingSuccessKeyWord = 'healthy'; // example of IIFY-scoped variable; not in the global scope. 
    
    fetch(`http://localhost:3000/ping`)
        .then((r) => r.status)
        .then((status) => {
            if (status === 200) {
                console.log(`Server ${pingSuccessKeyWord}`);
                document.getElementById("server_status").innerText = pingSuccessKeyWord;
            } else {
                console.log(`server not ${pingSuccessKeyWord}: ${status}`);
                document.getElementById("server_status").innerText = `Not ${pingSuccessKeyWord}`;
                document.getElementById("server_banner").className = `unhealthy`;
            }
        })
        .catch((error) => {
            console.log(`not ${pingSuccessKeyWord}: ${error}`);
            document.getElementById("server_banner").className = `unhealthy`;

            // Typically, it's better to have a "Security through obscurity" approach and avoid
            // dumping error messages where users can see them. This is a class exercise, though. 
            document.getElementById("server_status").innerText = `Error\r\n ${error}`;
        })
    }
)();

// Remove curly braces in function and simplify; add argument.
((pingSuccessKeyWord) =>
    fetch(`http://localhost:3000/ping`)
        .then((r) => r.status)
        .then((status) => {
            if (status === 200) {
                console.log(`Server ${pingSuccessKeyWord}`);
                document.getElementById("server_status").innerText = pingSuccessKeyWord;
            } else {
                console.log(`server not ${pingSuccessKeyWord}: ${status}`);
                document.getElementById("server_status").innerText = `Not ${pingSuccessKeyWord}`;
                document.getElementById("server_banner").className = `unhealthy`;
            }
        })
        .catch((error) => {
            console.log(`not ${pingSuccessKeyWord}: ${error}`);
            document.getElementById("server_banner").className = `unhealthy`;

            // Typically, it's better to have a "Security through obscurity" approach and avoid
            // dumping error messages where users can see them. This is a class exercise, though. 
            document.getElementById("server_status").innerText = `Error\r\n ${error}`;
        })
)('healthy');
