function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Example:
console.log(celsiusToFahrenheit(0));   // 32
console.log(celsiusToFahrenheit(100)); // 212


function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example:
console.log(fahrenheitToCelsius(32));  // 0
console.log(fahrenheitToCelsius(212)); // 100


function convertTemperature(value, scale) {
    if (scale === "C") {
        return (value * 9/5) + 32; // Celsius to Fahrenheit
    } else if (scale === "F") {
        return (value - 32) * 5/9; // Fahrenheit to Celsius
    } else {
        throw new Error("Invalid scale. Use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}

// Example:
console.log(convertTemperature(0, "C"));   // 32 (Celsius to Fahrenheit)
console.log(convertTemperature(32, "F"));  // 0 (Fahrenheit to Celsius)
