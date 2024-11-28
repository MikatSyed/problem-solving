// find second Largest value in array
// const array = [2,5,3,8,4,9]

// const findSecondLargestValue = (arr) =>{
//    const largestValue = Math.max(...arr);
//    const index = arr.indexOf(largestValue)
//    arr.splice(index,1);
//    const secondlargestValue = Math.max(...arr);
//    return secondlargestValue

// }
// console.log(findSecondLargestValue(array))

const findSecondLargest = (arr) => {
 
  if (arr.length < 2) {
    return null; 
  }

  arr.sort((a, b) => b - a); // 'b - a' ensures descending order

  // Loop through the sorted array starting from index 1 (second element)
  for (let i = 1; i < arr.length; i++) {
    // Check if the current element is different from the largest element (arr[0])
    if (arr[i] !== arr[0]) {
      return arr[i]; // Return the first element that is different from arr[0] (this will be the second largest)
    }
  }

  // If no second distinct largest value is found (all elements are the same), return null
  return null;
}


const array = [3, 5, 1, -2, 7, 8, 8]; 


console.log(findSecondLargest(array)); 

