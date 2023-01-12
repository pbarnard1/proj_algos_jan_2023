// // Array of arrays - our way of representing the sliding puzzle
// starter_puzzle = [
//     [6, 1, 3, 4],
//     [2, 11, 10, 8],
//     [5, 13, null, 7],
//     [9, 12, 14, 15]
// ]
// console.log(starter_puzzle);
// console.log(starter_puzzle[3]);

// Randomly generate the board
const generateNewPuzzle = (puzzleSize) => { // puzzleSize = number of rows (and columns)
    let newGrid = []; // This will eventually hold an array of arrays
    let valuesToPick = []; // This will hold the possible values we can pick from
    for (let j = 1; j <= puzzleSize*puzzleSize - 1; j++) {
        valuesToPick.push(j);
    }
    valuesToPick.push(null); // Placeholder that has no value ("blank" tile)
    // console.log(valuesToPick);
    // Put the actual values into the grid itself

    for (let k = 0; k < puzzleSize*puzzleSize; k++) { // DANGER: Do NOT use valuesToPick.length, as that's changing in your loop!!
        let randomIndex = Math.floor(Math.random()*valuesToPick.length);
        let randomVal = valuesToPick[randomIndex];
        // Ensure that once a value is picked, it can't be chosen again
        valuesToPick.splice(randomIndex, 1);
        console.log(`Current iteration: ${k+1}`);
        console.log("Value picked: " + randomVal);
        console.log(valuesToPick);
        // Make sure we're pushing to the correct row (subarray)
        newGrid.push(randomVal);
    }
}

generateNewPuzzle(5);
