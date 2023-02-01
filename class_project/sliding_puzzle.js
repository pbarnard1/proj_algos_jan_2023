// // Array of arrays - our way of representing the sliding puzzle
// starter_puzzle = [
//     [6, 1, 3, 4],
//     [2, 11, 10, 8],
//     [5, 13, null, 7],
//     [9, 12, 14, 15]
// ]
// console.log(starter_puzzle);
// console.log(starter_puzzle[3]);
const makeSolvableGrid = (puzzleSize) => {
    let newGrid = generateNewPuzzle(puzzleSize); // Start with a new grid to get us going
    while (!isSolvable(newGrid)) { // While the current grid is not solvable...
        newGrid = generateNewPuzzle(puzzleSize); // Make a new grid
    }
    return newGrid; // Return the solvable grid
}

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
    let rowWithBlankSpace;
    // Count the number of inversions
    for (let i = 0; i < oneDimensionalGrid.length - 1; i++) { // From 1st through 2nd-to-last item
        if (!oneDimensionalGrid[i]) {
            rowWithBlankSpace = Math.floor(i / thisGrid.length);
        }
        for (let j = i + 1; j < oneDimensionalGrid.length; j++) { // From item immediately afterward to last item
            // Check to see if not null (null is a "falsy" value) and if there actually is an inversion
            if (oneDimensionalGrid[i] && oneDimensionalGrid[j] && oneDimensionalGrid[i] > oneDimensionalGrid[j]) {
                inversionCount++;
            }

        }
    }
    console.log(oneDimensionalGrid);
    console.log(inversionCount);
    // Ternary operator (one-line if statement essentially)
    // statement_to_check ? value_if_true : value_if_false;
    return thisGrid.length % 2 == 0 ? inversionCount + rowWithBlankSpace % 2 == 1 : inversionCount % 2 == 0;
}

const isGridSolved = (thisGrid) => {
    let oneDimensionalGrid = [];
    for (let row = 0; row < thisGrid.length; row++) {
        oneDimensionalGrid = [...oneDimensionalGrid, ...thisGrid[row]]; // Add current row
    }
    // Now check each value - not including the last value because if we make it there, the grid is solved and the last item is null
    for (let curInd = 0; curInd < oneDimensionalGrid.length - 1; curInd++) {
        if (oneDimensionalGrid[curInd] !== curInd + 1) {
            return false;
        }
    }
    return true;
}

const grid1 = makeSolvableGrid(3);
// console.log(grid1);
console.log(isSolvable(grid1));

console.log(isGridSolved(grid1));

let gridDiv = document.getElementById("main_grid");
for (let i = 0; i < grid1.length; i++) {
    let newRow = document.createElement("div");
    newRow.setAttribute("class","row");
    // To add classes/IDs, use .setAttribute('class/id','name_of_class/id')
    for (let j = 0; j < grid1[i].length; j++) {
        let newItem = document.createElement('div');
        // ds-data and use that to leverage where we are in the grid - thank you Thomas!
        
        // newItem.classList.add(); // Adding a class
        // newItem.classList.toggle(); // For toggling a class (adding/removing)
        let actualValue = grid1[i][j];
        if (actualValue === null) {
            newItem.setAttribute("class","blank_space");
        } else {
            newItem.setAttribute("class","item");
            let valueToInsert = document.createTextNode(actualValue); // Allows us to put in the actual value in the div itself
            newItem.appendChild(valueToInsert);
        }
        newRow.appendChild(newItem);
    }
    gridDiv.appendChild(newRow);
}
/* Thanks Gary!  This is a good way to check to see how long your code runs!
console.time('Runtime:')
// code goes here
console.timeEnd('Runtime:')
*/

/* Tasks:
1: Making sure our grid is solvable = DONE.  (Thanks to: "ensuring a sliding puzzle is solvable"
    https://www.cs.princeton.edu/courses/archive/spring21/cos226/assignments/8puzzle/specification.php

In summary, when n is odd, an n-by-n board is solvable if and only if its number of inversions is even.
That is, when n is even, an n-by-n board is solvable if and only if the number of inversions plus the 
row of the blank square is odd. This assumes we start with row 0.)

2: Rendering this grid in HTML - pretty much nearly DONE.
3: How do we move pieces around?  What about selecting the size of the grid?  Maybe add a timer/keep track
   of the number of moves?  Resetting the puzzle?
4: Check to see if the current grid as is is the solution.

From Thursday week 2 office hour:
https://codepen.io/WolfsVeteran/pen/MWBEaGe - project board mockup where you can move stuff from Melissa
https://codepen.io/CSR-89/pen/OXBwOJ - someone's 3x3 sliding puzzle
https://codepen.io/M_J_Robbins/pen/VeNWQQ - cool CSS with sliding puzzle

*/