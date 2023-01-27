// 1. Pull the current date and time
// console.log(now())
let currTime = new Date()
// console.log(currTime)
// console.log(typeof(currTime))


/* 
2023-01-27T00:22:40.418Z  
year-mo-dayT12:22:40(am)Zulu
*/
let localString = currTime.toLocaleString()
// console.log(localString)
// console.log(typeof(currTime))

let timeString = currTime.toTimeString()
// console.log(timeString)
// 3. console.log the time only

// 4. console.log the date only


// 5a. What time zone is displaying?


// 5b. Change to the different time zones (ET, CT, MT, PT)
let pt = currTime.toLocaleString('en-US', {timeZone: 'America/Los_Angeles'})
// console.log(pt)


function est() { 
    est = new Date(new Date().getTime() + -5*60*60*1000).toUTCString('en-GB')
    console.log('EST: ', est)
    adjust = est.slice(-12) // starts at the -12 index meaning go to end count back 12
    console.log(adjust)
    cut = adjust.substr(0,9) // only prints the chars between index 0 and 9
    console.log(cut)
    zone = 'ET'
    final = cut + zone
    console.log(final)
}
est()