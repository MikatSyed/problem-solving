// find max/min in a given array
function findMaxMin(arr){
    let max = arr[0];
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }

    }
    return [min,max]
}
const array = [3, 5, 6, 8, 2, 7];
console.log(findMaxMin(array)); // Output: [ max: 8, min: 2 ]


// const findMinMaxNumber = (arr) =>{
//   const maxNum = Math.max(...arr)
//   const minNum = Math.min(...arr)
//   return [maxNum,minNum];
// }

// console.log(findMinMaxNumber(array))