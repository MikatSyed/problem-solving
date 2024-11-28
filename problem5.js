// find even or odd numbers in array in javascript
const findEvenOddNumbers = (arr) => {
    const evenNumbers = [];
    const oddNumbers = [];
    
    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]); // Number is even
        } else {
            oddNumbers.push(arr[i]); // Number is odd
        }
    }
    
    return { evenNumbers, oddNumbers };
};



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findEvenOddNumbers(array);
console.log("Even Numbers:", result.evenNumbers); // Output: [2, 4, 6, 8, 10]
console.log("Odd Numbers:", result.oddNumbers);   // Output: [1, 3, 5, 7, 9]
