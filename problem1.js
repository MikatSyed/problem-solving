// How To find duplicate elements in an array in javascript?

const array = [1, 2, 3, 2, 4, 5, 6, 3];

const duplicates  = array.filter((element,index,arr)=> arr.indexOf(element) !== index);
console.log(duplicate)