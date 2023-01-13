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
    let thisRow;
    for (let k = 0; k < puzzleSize*puzzleSize; k++) { // DANGER: Do NOT use valuesToPick.length, as that's changing in your loop!!
        if (k === 0) {
            thisRow = [];
        }
        let randomIndex = Math.floor(Math.random()*valuesToPick.length);
        let randomVal = valuesToPick[randomIndex];
        // Ensure that once a value is picked, it can't be chosen again
        valuesToPick.splice(randomIndex, 1);
        // console.log(`Current iteration: ${k+1}`);
        // console.log("Value picked: " + randomVal);
        // console.log(valuesToPick);
        // Make sure we're pushing to the correct row (subarray)
        thisRow.push(randomVal);
        // console.log(thisRow);
        if (thisRow.length == puzzleSize) {
            newGrid.push(thisRow);
            // console.log(newGrid);
            thisRow = []; // Empty the array for the next row of numbers
        }
    }
    console.log(newGrid);
}

const isSolvable = (thisGrid) => {
    let inversionCount = 0; // Count the number of inversions in the grid
    // How would you count the inversions?  A single for loop?  Multiple (nested) for loops?  A clever array function?
}

/* Tasks:
1: Making sure our grid is solvable.  (Thanks to: "ensuring a sliding puzzle is solvable"
    https://www.cs.princeton.edu/courses/archive/spring21/cos226/assignments/8puzzle/specification.php

In summary, when n is odd, an n-by-n board is solvable if and only if its number of inversions is even.
That is, when n is even, an n-by-n board is solvable if and only if the number of inversions plus the 
row of the blank square is odd. This assumes we start with row 0.


2: Rendering this grid in HTML.
3: Check to see if the current grid as is is the solution.
4: Write the rules for how to move pieces.
*/
generateNewPuzzle(6);
