function printDiamond(rows) {
    // Print the upper part of the diamond
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }

    // Print the lower part of the diamond
    for (let i = rows - 1; i >= 1; i--) {
        const spaces = ' '.repeat(rows - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

// Example:
printDiamond(5);

function printNumberDiamond(rows) {
    // Print the upper part of the diamond
    for (let i = 1; i <= rows; i++) {
        const spaces = ' '.repeat(rows - i);
        const numbers = Array.from({ length: 2 * i - 1 }, (_, index) => index + 1).join('');
        console.log(spaces + numbers);
    }

    // Print the lower part of the diamond
    for (let i = rows - 1; i >= 1; i--) {
        const spaces = ' '.repeat(rows - i);
        const numbers = Array.from({ length: 2 * i - 1 }, (_, index) => index + 1).join('');
        console.log(spaces + numbers);
    }
}

// Example:
printNumberDiamond(5);

