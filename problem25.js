function isArmstrongNumber(number) {
    // Convert the number to a string to easily get each digit
    let strNum = number.toString();
    let numDigits = strNum.length;
    let sum = 0;

    // Loop through each digit, raise it to the power of numDigits, and add to the sum
    for (let i = 0; i < numDigits; i++) {
        sum += Math.pow(Number(strNum[i]), numDigits);
    }

    // Check if the sum equals the original number
    return sum === number;
}

// Example usage:
console.log(isArmstrongNumber(153));  // true
console.log(isArmstrongNumber(9474)); // true
console.log(isArmstrongNumber(123));  // false
