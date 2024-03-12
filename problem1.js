// How to remove duplicate elements from this array?
const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

function removeDuplicates(arr) {
  const uniqueArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArr.indexOf(arr[i]) === -1) {
      uniqueArr.push(arr[i]);
    }
  }

  return uniqueArr;
}

const result = removeDuplicates(arr);
console.log(result);
