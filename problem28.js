// Flatten a Nested Array
function flattenArray(arr) {
    return arr.flat(Infinity); // Using flat() to recursively flatten the array
}

// Example:
console.log(flattenArray([1, [2, [3, 4]], 5])); // [1, 2, 3, 4, 5]
