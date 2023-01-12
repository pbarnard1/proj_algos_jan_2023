/* Students: Work together in this file! */

/* DISCLAIMER: 
This code was by everybody - so there might be 
some errors.  Use this as an opportunity to debug!
This code hasn't been modified after the live lecture. */

var hi = "Hello Everyobe"
console.log("ML wrote this", hi)
console.log(`ML is saying ${hi}`)


/* Print 1-255
print1To255()
Print all the integers from 1 to 255. */
function Print1To255() {
    for (var i = 1; i <= 255; i++) {
        console.log(i);
    }
}
Print1To255()
console.log('Trevor wrote:')

/* Print Ints and Sum 0-255
printIntsAndSum0To255()
Print integers from 0 to 255, and with each
integer print the sum so far. */
count = 0
for(var i = 0; i<=255; i++){
    count += i;
    console.log('leon wrote', count, i);
}


/* Print Max of Array
printMaxOfArray(arr)
Given an array, find and print its largest element. */
const printMaxofArray = (arr) => {
    // Another approach, added by Adrian:
    // max = arr[0];
    // for (let i = 1; ....) // Start at index 1
  let max = -Infinity
  for (let i = 0; i<arr.length; i++) { 
    // max = Math.max(max, arr[i]); // Alternate approach without an if statement, suggested by Gary!
    if (arr[i]>max) { 
      max=arr[i]
    }
  } console.log(`Svet wrote ${max}`)
}

/* Return Odds Array 1-255
returnOddsArray1To255()
Create an array with all the odd integers between
1 and 255 (inclusive). */
function returnOddArray{
    var x = [];
    for(var i = 1; i<256; i+=2) {
        x.push(i);
    }
    console.log('Torrei wrote', x);
}
function returnOddArray()



/* Return Array Count Greater than Y
returnArrayCountGreaterThanY(arr, y)
Given an array and a value Y, count and print the
number of array values greater than Y. */
var arr = [4,10,1,-4]

function biggerThanY(arr, y) {
    var count = 0
    for(var i = 0; i <= arr.length; i++) {
    if(arr[i] > y) {
        count++
    }
}
    console.log(count)
}

biggerThanY(arr, 3)



/* Print Max, Min, Average Array Values
printMaxMinAverageArrayVals(arr)
Given an array, print the max, min and average
values for that array. */
function maxMinAvg(array) {
    var sum = 0
    var max = array[0]
    var min = array[0]
    for (var i = 0; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i]
        }
        else if (array[i] < min) {
            min = array[i]
        }
        sum = sum + array[i]
    }
    var avg = (sum / array.length)
    console.log(max, min, avg)
}
console.log('Trevor wrote:')
maxMinAvg([5,10,11,4,7])





/* Swap String for Array Negative Values
swapStringForArrayNegativeVals(arr)
Given an array of numbers, replace any negative
values with the string 'Dojo'. */
function swapString(arr){
    for(let i = 0; i< arr.length; i++){
        // One-line version by Anthony: arr.map(val => val < 0 ? 'Dojo' : val);
        if (arr[i]< 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

let arr = [1,-1,2,-5,6,-10];
let result = swapString(arr);
console.log('Anthony A wrote');
console.log(result);



/* Print Odds 1-255
printOdds1To255()
Print all odd integers from 1 to 255. */
/*Ben L*/

const printOdds1To255 = () => {
    for(let i=0; i<256; i++){
    if(i%2!=0){
        console.log(i, "This belongs to Ben L") // add comments in your console.log here
    }
}
}

/* Print Array Values
printArrayVals(arr)
Iterate through a given array, printing each value. */

var arr = [45,12,23,34];
for (var x=0; x<arr.length;x++){
    console.log("leon wrote this", arr[x]);
}



/* Print Average of Array
printAverageOfArray(arr)
Analyze an array’s values and print the average. */


const printAverageOfArray = arr => {
    let sum = 0 
    for (let i=0; i<arr.length; i++) {
        sum += arr[i]
    }
    console.log(sum/arr.length);
}
console.log(`G DuMond`)
printAverageOfArray([11,22,55])

/* Square Array Values
squareArrayVals(arr)
Square each value in a given array, returning that
same array with changed values. */
const squareArrayVals = (arr) => { 
  for (let i = 0; i<arr.length; i++) { 
    arr[i] = arr[i]*arr[i]
  } console.log(`Svet wrote ${arr}`)
} 


/* Zero Out Array Negative Numbers
zeroOutArrayNegativeVals(arr)
Return the given array, after setting any negative
values to zero. */

const zeroOutArrayNegativeVals = (arr) => {
    for ( let i=0; i<arr.length; i++) {
        if (arr[i]<0) arr[i] = 0
    }
    return arr
}
console.log(`G DuMond ${zeroOutArrayNegativeVals([1,9,4,-7,1,-2,-1])}`)


/* Shift Array Values Left
shiftArrayValsLeft(arr)
Given an array, move all values forward (to the
left) by one index, dropping the first value and
leaving a 0 (zero) value at the end of the array. */
const shiftArrayValsLeft = arr => {
    arr.shift()
    arr.push(0)
    return arr
}

console.log(`G DuMond ${shiftArrayValsLeft([1,2,3,4,5,6])}`)