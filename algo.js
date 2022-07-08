let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let start = 0;
let end = arr.length - 1;
let target = 4;

function binarySearchRecursive(arr, start, end, target) {
  if(start > end) return false;
  let midIndex = Math.floor((start + end) /2);
  if(arr[midIndex] === target) return true;
  
}