/* eslint-disable prettier/prettier */

class SomeKindOfSort {
  constructor(array) {
    this.array = array;
  }
  sort(arr) {
    let temp = 0;
    let isSorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      isSorted = true;
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          isSorted = false;
        }
      }
      if (isSorted) break;
    }
    return arr;
  }
}

module.exports = SomeKindOfSort;
