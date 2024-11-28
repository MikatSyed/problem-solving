// Find missing elements in a given Array 1 to 10

const findMissingElements = (arr) => {
    const missingNumbers = [];
    
    // Loop through numbers 1 to 10
    for (let i = 1; i <= 10; i++) {
        if (!arr.includes(i)) {  // If the number is not in the array
            missingNumbers.push(i);  // Add it to the missingNumbers array
        }
    }
    
    return missingNumbers;
};



const array = [1, 2, 4, 5, 7, 8, 10];  // Example array
console.log(findMissingElements(array));  // Output: [3, 6, 9]
