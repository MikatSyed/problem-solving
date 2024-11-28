// find fictorial of a given number in Javascript
const factorial = (n) => {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";  // Handle negative numbers
    }

    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i; // Multiply result by each number from 1 to n
    }
    return result;
};



console.log(factorial(5));  // Output: 120
console.log(factorial(0));  // Output: 1
