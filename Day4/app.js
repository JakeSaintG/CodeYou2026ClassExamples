let foo = 0;
const bar = 10;

// goal: set foo to 1 if bar is 10 else set to 100
if ( bar === 10 ) {
    foo = 1;
} else {
    foo = 100;
}

console.log(foo);
//=================================

let fooTernary = 0;
const barTernary = 10;

fooTernary = barTernary === 10 ? 1 : 100;

console.log(fooTernary);