// We discussed the rest operator and why it's different than the spread operator.

/* 
The Rest operator can be used when declaring a function. It allows for arguments to be
passed into a function without explictly naming them or defining a specific amount of them.
It does so by packing them into an array that can be accessed in the function.
*/
const restExample = (notRest, ...restArgs) => {
    // Note: The rest operator puts the args into an array and then also puts that into an array
    console.log("Rest operator args array:");
    console.log(restArgs[0]);

    console.log("Rest operator args printed individually:");
    restArgs[0].forEach((element) => {
        console.log(`Argument: ${element}`);
    });
};

const rest = [1, 2, 3, 4, 5, 6];
restExample("not rest", rest);

/*
Personally, the rest operator feels like a recipe for errors. Functions can take arrays as arguments so
one could simply construct an array and pass it in instead. In my experience, it's safer to be explicit. 
There may be some edge cases that I'm not thinking of where it would make sense, though.
*/
const notRest = (array) => {
    console.log('Array elements from notRest example:')
    array.forEach((element) => {
        console.log(`Argument: ${element}`);
    });
}

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

const arrayArg = array1.concat(array2);

notRest(arrayArg);
