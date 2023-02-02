const countdown = (starting_value) => {
    for (let k = starting_value; k > 0; k--) {
        console.log(k);
    }
    console.log("Lift off!");
}

// countdown(10);

const countdownRecursive = (startingValue) => {
    // Base/stopping case
    if (startingValue <= 0) {
        console.log("Lift off!");
    } else { // Recursive case
        console.log(startingValue);
        countdownRecursive(startingValue-1); // Forward progress
    }
}

// countdownRecursive(10);

/*
Given an array that has numbers and subarrays, and possibly subarrays of subarrays, subarrays of those,
etc., return how many values we find total.  Empty arrays don't count towards the total.
*/

let x1 = [8, [1, 4, [4, 8, [1, 9, 4, []]],3],15,8,[[2,8],4]];

// for (let k = 0; k < x1.length; k++) {
//     console.log(x1[k]);
// }

const recursiveCountElements = (currentArray) => {
    let count = 0; // Number of items in the current array
    // Go through this array, one element at a time
    for (let i = 0; i < currentArray.length; i++) {
        if (Array.isArray(currentArray[i])) { // If the current item is a subarray (better than using "typeof" keyword)
            count += recursiveCountElements(currentArray[i]); // Count the items in this subarray
        } else {
            count++; // Not an array, so add one to the count only
        }
    }
    return count; // Return total for this array
}

console.log(recursiveCountElements(x1));