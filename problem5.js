//Majority Element 
function majorityElement(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    return nums[Math.floor(nums.length / 2)]; // Return the element at the middle index
}

// Example usage:
let nums1 = [3, 2, 3];
console.log(majorityElement(nums1)); // Output: 3

let nums2 = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums2)); // Output: 2
