// moves all zeros to the end of the array 
function moveZeroes(nums) {
    if (!nums || nums.length === 0) {
        return;
    }

    let nonZeroPtr = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            // Swap non-zero element with the element at nonZeroPtr position
            [nums[i], nums[nonZeroPtr]] = [nums[nonZeroPtr], nums[i]];
            nonZeroPtr++;
        }
    }
}

// Example usage:
let nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1); // Output: [1, 3, 12, 0, 0]

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2); // Output: [0]
