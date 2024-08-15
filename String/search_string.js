let str = 'Hello world, welcome to JavaScript world!';
let firstIndex = str.indexOf('world');            //The index at which to start the search. Default is 0.
console.log(firstIndex);

let last_index = str.lastIndexOf("world"); //The index at which to start the search backwards.
console.log(last_index);                  // Default is the length of the string minus one (string.length - 1).

console.log(str.match(/wo/g));


// let text = "The rain in SPAIN stays mainly in the plain";
// //search = text.match("rain");
// //console.log(search);

// search2 = text.matchAll("in");
// console.log(search2);