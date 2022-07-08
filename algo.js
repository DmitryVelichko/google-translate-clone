let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let start = 0;
let end = arr.length - 1;
let target = 4;

function binarySearchRecursive(arr, start, end, target) {
  if(start > end) return false;
  let midIndex = Math.floor((start + end) /2);
  if(arr[midIndex] === target) return true;
  if(arr[midIndex > target]) {
    return binarySearchRecursive(arr, start, midIndex - 1, target);
  } else {
    return binarySearchRecursive(arr, midIndex + 1, end, target);
  }
}

console.log(binarySearchRecursive(arr, start, end, target));