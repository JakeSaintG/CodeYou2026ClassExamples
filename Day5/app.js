// A reference to dom content.
// An example of a "reasonable" global variable (my personal opinion).
// While, yes, it can be instantiate with in a function, that instatiation will happen
// EVERY time that function is run. Getting and setting one time can be more efficient
const changeMe = document.getElementById("change_me");

// Initialize a global variable
let global = "i'm global";

// Create a function that has logic DEPENDING on the state of the global variable.
function checkGlobal(global) {
    if (global === "i'm global") {
        return "NICE!";
    } else {
        return "BUMMER!";
    }
}

// Create a function that mutates the value of the global variable.
function changeGlobal() {
    global = "I'm still global but different now.";
}

// A simple example of logic that uses the global variable, changes it, and then
// "fails" later due to a change in the state of the variable.
const globalCheck = checkGlobal(global); // Check the variable. Returns a "success" state
console.log(globalCheck);

changeGlobal(global); // Mutate the variable. Variables change all the time for various reasons.

const secondGlobalCheck = checkGlobal(global); // Check the variable. Returns a "fail" state
console.log(secondGlobalCheck);

// An example of local variables
function localExample() {
    // init a local variable. EVERY time this function runs, this variable will start in this state.
    let local = "I'm local";

    console.log("⬇️⬇️⬇️⬇️INSIDE OF localExample() FUNCTION⬇️⬇️⬇️⬇️"); // The console is getting a little crowded. These may help pick things out.
    
    console.log(local); // Log the value.
    
    console.log("⬆️⬆️⬆️⬆️INSIDE OF localExample() FUNCTION⬆️⬆️⬆️⬆️");

    function changeAndLogLocalVariable() {
        console.log("⬇️⬇️⬇️⬇️INSIDE OF changeAndLogLocalVariable() FUNCTION⬇️⬇️⬇️⬇️");

        local = "I'm still local but different now."; // Change the value
        console.log(local); // Log different the value

        console.log("⬆️⬆️⬆️⬆️INSIDE OF changeAndLogLocalVariable() FUNCTION⬆️⬆️⬆️⬆️");
    }
    
    console.log("⬇️⬇️⬇️⬇️INSIDE OF localExample() FUNCTION⬇️⬇️⬇️⬇️");

    changeAndLogLocalVariable();
    console.log(local); // Log local variable one more time to show it's mutated state outside of the internal function.

    console.log("⬆️⬆️⬆️⬆️INSIDE OF localExample() FUNCTION⬆️⬆️⬆️⬆️");
}

localExample();


// Issues that arise with "var" as opposed to "let"/"const"
if (true) {
    var blockVar = "I'm accessible outside this block";
}

console.log(blockVar); // "I’m accessible outside this block"

if (true) {
    let blockVar2 = "I'm accessible outside this block";
}

try {
    console.log(blockVar2); // fails since the "blockVar2" is scoped to the if block.
} catch (error) {
    // This catch block allows the above code to fail while moving on to the next example.
    // Without this try/catch, the code would stop executing after console.log(blockVar2) failed.

    console.log("Failed to access blockVar2 variable:");
    console.log(error);
}

// An psuedo-example of how I would put a random quote on the page in an interval.
const printRandomQuoteAtInterval = (intervalSeconds) => {
    // THIS CODE IS BUGGED ON PURPOSE. Try to get it to PROPERLY change changeMe.innerText on the interval. 
    // Please reach out to me (Jake St. Germain) on Slack if you would like to go over this. 😊
    
    const quotes = [
        "In the darkest times, hope is something you give yourself. That is the meaning of inner strength.", // Uncle Iroh
        "Do or do not. There is no try", // Yoda
        "Be exellent to each other.", // Bill (Bill and Ted)
        "Only I Can Call My Dream Stupid!", // Roronoa Zoro
        "It's dangerous to go alone. Take this!", // Random guy in a cave that is just standing there with a sword on the ground in front of him. (The Legend of Zelda)
        "I see now that the circumstances of one's birth is irrelevent,it is what you do with the gift of life that determines who you are.", //Mewtwo (Pokemon the First Movie)
        "I always though that, if the pen is mightier than the sword, why to actions speak louder than words?", //HummusVacuum
    ];
    
    const quoteIndex = Math.floor(Math.random() * quotes.length);
    setInterval(() => {
        console.log(quotes[quoteIndex]);
    }, intervalSeconds * 1000); // setInterval() needs milliseconds
} 

console.log("⬇️⬇️⬇️⬇️ BEGIN PRINTING RANDOM QUOTES ⬇️⬇️⬇️⬇️");
printRandomQuoteAtInterval(2);