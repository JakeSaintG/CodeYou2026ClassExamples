// ================================================
const array = ['jan','feb','mar','apr','june']; // WE DON'T CONTROL
// ================================================

// WE DO CONTROL AND MUST FIX THE ARRAY ABOVE
const startIndex = 4;
const deleteCount = 1;
const itemsToAdd = ['may','june','july']

// WRITE YOUR CODE HERE
function modifyArray(arr, startI, delCnt, itmsToAdd) {
    arr.splice(startI, delCnt, ...itmsToAdd);
    return arr;
}

console.log(modifyArray(array, startIndex, deleteCount, itemsToAdd));



// ==============================================
const pkmn = document.getElementById('pkmn');

const pkmnList = [
    {
        name: "bulbasaur",
        number: 1,
        types: ['Green', 'Poison'],
        region: 'Kanto',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
    },
    {
        name: "ivysaur",
        number: 2,
        types: ['Green', 'Poison'],
        region: 'Kanto',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'
    },
    {
        name: "venusaur",
        number: 3,
        types: ['Green', 'Poison'],
        region: 'Kanto',
        img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png'
    }
]

pkmnList.forEach(p => {
    const container = document.createElement('div');
    container.className = 'container_div'

    const name = document.createElement('p');
    name.innerText = p.name;
    name.className = "name";

    const img = document.createElement('img');
    img.src = p.img;
    img.className = "img";

    container.append(name);
    container.append(img);

    pkmn.append(container);
});
