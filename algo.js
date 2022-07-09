const arr = [1, 4, 6, 3, 5, 7, 32, 54, 42, 234];

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if(arr[i] < arr[indexMin]) {
        indexMin = j;
      }

    }
  }
};
