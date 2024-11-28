// find prime number in Javascript
function isPrime(n) {
    if (n <= 1) return false; // 0 and 1 are not prime numbers
    if (n === 2) return true; // 2 is the only even prime number
    if (n % 2 === 0) return false; // Exclude other even numbers

    // Check divisibility from 3 to the square root of n
    for (let i = 3; i * i <= n; i += 2) {
        // console.log(i)
        if (n % i === 0) {
            return false; // If divisible, not a prime number
        }
    }
    return true; // If no divisors found, n is prime
}



// Test the function
// console.log(isPrime(2));  // Output: true
// console.log(isPrime(11)); // Output: true
// console.log(isPrime(4));  // Output: false
// console.log(isPrime(49)); // Output: false


const findPrimesInRange = (start, end) => {
    const primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
};

// Example: Find prime numbers between 1 and 100
console.log(findPrimesInRange(1, 100));
