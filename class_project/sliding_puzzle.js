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
    return newGrid;
}

const isSolvable = (thisGrid) => {
    console.log(thisGrid);
    let inversionCount = 0; // Count the number of inversions in the grid
    // Move all the values to a 1-D grid so we can count inversions more easily
    let oneDimensionalGrid = [];
    for (let row = 0; row < thisGrid.length; row++) {
        oneDimensionalGrid = [...oneDimensionalGrid, ...thisGrid[row]]; // Add current row
    }
    // Find row where null is found (to do Wednesday)

    // Count the number of inversions
    for (let i = 0; i < oneDimensionalGrid.length - 1; i++) { // From 1st through 2nd-to-last item
        for (let j = i + 1; j < oneDimensionalGrid.length; j++) { // From item immediately afterward to last item
            // Check to see if not null (null is a "falsy" value) and if there actually is an inversion
            if (oneDimensionalGrid[i] && oneDimensionalGrid[j] && oneDimensionalGrid[i] > oneDimensionalGrid[j]) {
                inversionCount++;
            }

        }
    }
    console.log(oneDimensionalGrid);
    console.log(inversionCount);

    // We will return a boolean here
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
const grid1 = generateNewPuzzle(3);
// console.log(grid1);
isSolvable(grid1);

/* Thanks Gary!  This is a good way to check to see how long your code runs!
console.time('Runtime:')
// code goes here
console.timeEnd('Runtime:')
*/