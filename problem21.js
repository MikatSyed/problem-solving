// find fibonacci sequence in javascript
function fibonacci(n) {
    let sequence = [0, 1]; // Starting values for Fibonacci sequence
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.slice(0, n); // Return first `n` elements
}

// Example:
console.log(fibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
