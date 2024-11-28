function findFactors(num) {
    const factors = [];
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);  // If i divides num evenly, it is a factor
        }
    }
    
    return factors;
}

// Example usage:
const number = 27;
const factors = findFactors(number);
console.log(`Factors of ${number}:`, factors);
