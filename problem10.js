// reverse a string in Javascript
// const reverseString = (str) => {
//     return str.split('').reverse().join('');
// };


// // Test the function
// const string = "Hello World!";
// console.log(reverseString(string));  // Output: "!dlroW olleH"


const reverseString = (str)=>{
    let revered = '';
    for(let i = str.length -1; i >= 0; i--){
        revered += str[i];
    }
    return revered;
}

// // Test the function
const string = "Hello World!";
console.log(reverseString(string));  // Output: "!dlroW olleH"
