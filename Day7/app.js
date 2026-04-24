
// ARROW FUNCTIONS

function nonArrowFunction() {
    console.log(`I'm a non arrow function`);
}

const arrowFunction = () => {
    console.log(`I'm an arrow function`);
}

console.log(nonArrowFunction());

console.log(arrowFunction());

(
    () => {
        console.log('iife')
    }
)();

setTimeout(() => {
    console.log('from timeout')
}, 5000);

setTimeout(function () {
    console.log('from timeout 2')
}, 5000);

const executeMe = () => {
    console.log('from timeout 3')
}

setTimeout(executeMe, 5000);
