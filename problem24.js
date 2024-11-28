// print the table of any user defined number
function printMultiplicationTable(number, range = 10) {
    for (let i = 1; i <= range; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

// Example usage:
let number = 7;  // User-defined number
printMultiplicationTable(number);
