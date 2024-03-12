//remove dublicate
function findDuplicates(nums) {
    const duplicates = [];
    
    for (let num of nums) {
        const index = Math.abs(num) - 1; 
        if (nums[index] < 0) {
         
            duplicates.push(index + 1);
        } else {
           
            nums[index] *= -1;
        }
    }
    
    return duplicates;
}

// Example usage:
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums)); // Output: [2, 3]
