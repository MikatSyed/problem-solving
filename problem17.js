// find union of two arrays in javascript
// function getUnion(arr1, arr2) {
//     return [...new Set([...arr1, ...arr2])];
// }

// // Example:
// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];
// console.log(getUnion(array1, array2)); // [1, 2, 3, 4, 5]


function getUnion(arr1, arr2) {
    const combined = arr1.concat(arr2);
    console.log(combined,typeof combined)
    return combined.filter((item, index) => combined.indexOf(item) === index);
}

// // Example:
const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
console.log(getUnion(array1, array2)); // [1, 2, 3, 4, 5]
