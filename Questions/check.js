function countOccurrences(arr, element) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            count++;
        }
    }
    return count;
}

const input = [2, 3, 4, 5, 2, 3];
const elementToCheck = 5;
const occurrences = countOccurrences(input, elementToCheck);
console.log(occurrences); // Output: 2

