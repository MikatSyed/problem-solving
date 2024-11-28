// find intersection of two arrays in javascript
function getIntersection(arr1, arr2) {
    return arr1.filter(element => arr2.includes(element));
}

// Example:
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(getIntersection(array1, array2)); // [3, 4]


// function getIntersection(arr1, arr2) {
//     const set2 = new Set(arr2);
//     return arr1.filter(element => set2.has(element));
// }

// // Example:
// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(getIntersection(array1, array2)); // [3, 4]
