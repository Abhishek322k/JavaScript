// let str = " I am learning JavaScript and React. "; 

// str1 = str.trim();
// console.log(str1);             // In case space is present in the beginning

// arr1 = str1.split(" ");
// console.log(arr1);
// console.log(typeof(arr1));     //String converted to array

// console.log(arr1.length);      //Prints the length of array

  //Question 2

// str1 =  str.trim();         
// str1 =  str1.split(" ");     


// let str =" i live in noida ";
// str1 =  str.trim();              //Removing space in begin and end
// str1 =  str1.split(" ");         //Converting string into array
// console.log(str1);

// let str2 = str1.map(function(str1) 
// {
//     return str1.charAt(0).toUpperCase() + str1.slice(1);
// });

// new_str = str2.join(' ');           //converting array into string
// console.log(new_str);

let array = [2, 4, 10, [12, 4, [100, 99], 4], [3, 2, 99], 0 ]

let maxValue = 0

function maxNumber(array) {
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      maxNumber(array[i])
    } else {
      if (array[i] > maxValue) {
        maxValue = array[i]
      }
    }
  }
}
maxNumber(array)
console.log(maxValue)
