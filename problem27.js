function removeDuplicates(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

// Example:
console.log(removeDuplicates([1, 2, 3, 4, 4, 5, 5, 6])); // [1, 2, 3, 4, 5, 6]
