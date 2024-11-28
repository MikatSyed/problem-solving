// find palindrome in javascript
// const isPalindrome = (str) => {
//     // Normalize the string: remove non-alphanumeric characters and convert to lowercase
//     const cleanedStr = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//     // Reverse the cleaned string
//     const reversedStr = cleanedStr.split('').reverse().join('');

//     // Check if the original cleaned string equals the reversed string
//     return cleanedStr === reversedStr;
// };
const isPalindrome = (str)=>{
    let revered = '';
    for(let i = str.length -1; i >= 0; i--){
        revered += str[i];
    }
    
    return revered === str;
}

// Test the function
console.log(isPalindrome("A man, a plan, a canal, Panama"));  // Output: true
console.log(isPalindrome("racecar"));                           // Output: false
