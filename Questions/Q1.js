// let today = new Date();
// console.log(today);

// year = today.getFullYear();
// console.log(year);

// month = today.getMonth();
// console.log(month);

let startTime = new Date().getTime();

// // Some code you want to measure
// for (let i = 0; i < 1000000; i++) {
//     // Some computation
// }

let endTime = new Date().getTime();
let timeTaken = endTime - startTime; // Time taken in milliseconds

console.log('Time taken: ' + timeTaken + ' milliseconds');

console.log(endTime)


