var a = [
  1,
  2,
  4,
  6,
  1,
  100,
  0,
  10000,
  3
];

a.sort(function (a, b) {
  return a - b;
});

console.log('a,', a);

function binarySearch(arr, i) {
  var mid = Math.floor(arr.length / 2);
  console.log(arr[mid], i);

  if (arr[mid] === i) {
      console.log('match', arr[mid], i);
      return arr[mid];
  } else if (arr[mid] < i && arr.length > 1) {
      console.log('mid lower', arr[mid], i);
