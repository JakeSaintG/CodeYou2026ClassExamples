/* ==============================================================
    Before looking at this file, check out app.js to see our 
    implementation of modifyArray().
============================================================== */

// Let's use the Arrange, Act, Assert methodology to do our testing.

// Most unit testing frameworks come with an equality assertion method. We just have
// "vanilla" Javascript so let's make one ourselves for the below tests.
const assertEqual = (expected, actual) => {
    // Array equality is odd in JS so let's convert to a string before we compare.
    // JSON.stringify() is used to allow any arguement to be passed in. Not just arrays.
    if (JSON.stringify(expected) === JSON.stringify(actual)) {
        console.log('✅ Test passed!');
    } else {
        throw '❌ Test failed';
    }
}


/* Arrange (build out the arguments needed to test modifyArray()'s functionality) */
const arrayTEST = [1, 2, 4, 6, 7];
const startIndexTEST = 2;
const deleteCountTEST = 1;
const itemsToAddTEST = [3, 4, 5];

const expected = [1, 2, 3, 4, 5, 6, 7];

/* Act (call the function/method under test) */
const actual = modifyArray(arrayTEST, startIndexTEST, deleteCountTEST, itemsToAddTEST)

/* Assert (Make the assertion that the expected behavior matches the actual behavior. Fail if not) */
assertEqual(expected, actual);

// ================================ LET'S TEST AGAIN! ================================
/* Arrange */
const arrayTEST_2 = [];
const startIndexTEST_2 = 0;
const deleteCountTEST_2 = 0;
const itemsToAddTEST_2 = ['rock', 'paper', 'scissors'];

const expected_2 = ['rock', 'paper', 'scissors'];

/* Act */
const actual_2 = modifyArray(arrayTEST_2, startIndexTEST_2, deleteCountTEST_2, itemsToAddTEST_2)

/* Assert */
assertEqual(expected_2, actual_2);

// ================================ LET'S TEST AGAIN! ================================
/* Arrange */
const arrayTEST_3 = [1, 3, 4, 10];
const startIndexTEST_3 = 1;
const deleteCountTEST_3 = 2;
const itemsToAddTEST_3 = [2, 3, 4, 5, 6, 7, 8, 9];

const expected_3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/* Act */
const actual_3 = modifyArray(arrayTEST_3, startIndexTEST_3, deleteCountTEST_3, itemsToAddTEST_3)

/* Assert */
assertEqual(expected_3, actual_3);
