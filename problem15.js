// compare two Arrays are Equal or Not in JavaScript
// function arraysAreEqual(arr1, arr2) {
//     return arr1.length === arr2.length && arr1.every((value, index) => {
//        console.log( Array.isArray(value,'5'))
//         console.log(Array.isArray(arr2[index],'6'))
//         if (Array.isArray(value) && Array.isArray(arr2[index])) {
//             console.log('hitted')
//         //    console.log( Array.isArray(value,'7'))
//         //     console.log(Array.isArray(arr2[index],'8'))
//             return arraysAreEqual(value, arr2[index]); // Recursive call for nested arrays
//         }
//         console.log(value,arr2[index],'11')
//         return value === arr2[index];
//     });
// }

const arraysAreEqual =(arr1,arr2)=>{
    return arr1.length === arr2.length && arr1.every((value,index)=>{
        if(Array.isArray(value) && Array.isArray(arr2[index])){
          return arraysAreEqual(value,arr2[index])
        }
        return value === arr2[index]
    })
}

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false; // If lengths are different, arrays are not equal
    }

    for (let i = 0; i < arr1.length; i++) {
        const value1 = arr1[i];
        const value2 = arr2[i];

        if (Array.isArray(value1) && Array.isArray(value2)) {
            // Recursive comparison for nested arrays
            if (!arraysAreEqual(value1, value2)) {
                console.log('hitted')
                return false;
            }
        } else if (value1 !== value2) {
            return false; // Values are not equal
        }
    }

    return true; // Arrays are equal
}

// Example:
console.log(arraysAreEqual([1, 2, 3], [1, 2, 3])); // true
console.log(arraysAreEqual([1, 2, 3], [3, 2, 1])); // false
console.log(arraysAreEqual([1, [2, 3]], [1, [2, 3]])); // true
console.log(arraysAreEqual([1, [2, 3]], [1, [3, 2]])); // false
