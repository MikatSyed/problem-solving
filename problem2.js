// How to find out the largest/lowest elements from this array?
const arr = [1, 5, 9, 14, 5, 22, 48, 25, 22, 20, 9, 13];

function findLargestAndLowest(arr) {
  let largest = arr[0];
  let lowest = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }

    if (arr[i] < lowest) {
      lowest = arr[i];
    }
  }

  return { largest, lowest };
}

const result = findLargestAndLowest(arr);
console.log('Largest:', result.largest);
console.log('Lowest:', result.lowest);
