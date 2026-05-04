// ================================================
// ASSUME THAT WE DON'T CONTROL THIS ARRAY...BUT IT MUST BE FIXED!!!
const array = [ "january", "february", "march", "april", "june", "august", "september", "october", "november", "december"];
// ================================================

// The goal is to modify the array above to be correct
const startIndex = 4; /* Starting at index 4 (the 5th item in the array)...*/
const deleteCount = 1; /*...delete the item...*/
const itemsToAdd = [ "may", "june", "july" ]; /*...replace it with a corrected section of the array*/

// Create a function that uses the above arguements to complete the task.
function modifyArray(inputArray, startingIndex, numToDelete, itmsToAdd) {
    // Note: The arguement names are intentionally different to avoid confusion and issues with scope.

    /* Splice edits the array directly and returns the items what were removed...
    which we don't actually need. Comment in the below rows and it should print ["june"]. */
    // const itemsRemoved = inputArray.splice(startingIndex, numToDelete, ...itmsToAdd);
    // console.log(itemsRemoved);

    /*Since splice edits the array directly, we only need to call it and return the edited inputArray. */
    inputArray.splice(startingIndex, numToDelete, ...itmsToAdd);
    return inputArray;
}

// See the console for the correct array.
console.log(modifyArray(array, startIndex, deleteCount, itemsToAdd));


const pkmn = document.getElementById("pkmn");

// Pretend that we got this array from an outside API.
const pkmnList = [
    {
        name: "bulbasaur",
        number: 1,
        types: ["Green", "Poison"],
        region: "Kanto",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    {
        name: "ivysaur",
        number: 2,
        types: ["Green", "Poison"],
        region: "Kanto",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    },
    {
        name: "venusaur",
        number: 3,
        types: ["Green", "Poison"],
        region: "Kanto",
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    },
];

pkmnList.forEach((p) => {
    const container = document.createElement("div");
    container.className = "container_div";

    const name = document.createElement("p");
    name.innerText = p.name;
    name.className = "name";

    const img = document.createElement("img");
    img.src = p.img;
    img.className = "img";

    container.append(name);
    container.append(img);

    pkmn.append(container);
});
