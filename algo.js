const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 19];

const binarySearch = (arr, value) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === value) return middle;
    if (arr[middle] < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};
console.log(selectionSort(arr, 7));
