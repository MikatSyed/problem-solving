const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

// How to slice(22, 48) from this array
// Find the indices of 22 and 48
const startIndex = arr.indexOf(22);
const endIndex = arr.indexOf(48);

// Use slice to extract the portion
// const slicedArray = arr.slice(startIndex, endIndex + 1);
const slicedArray = arr.slice(5, 7);

console.log(slicedArray);
