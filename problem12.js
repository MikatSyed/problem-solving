// swap two variables without using the third
let a = 5;
let b = 10;

console.log("Before swap: a =", a, ", b =", b);

// Swap using arithmetic operations
a = a + b;  // a becomes 15 (5 + 10)
b = a - b;  // b becomes 5 (15 - 10)
a = a - b;  // a becomes 10 (15 - 5)

console.log("After swap: a =", a, ", b =", b);
