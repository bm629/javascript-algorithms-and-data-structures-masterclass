function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function bubbleSort(arr) {
  let noSwaps;
  for (let index = arr.length - 1; index >= 0; index--) {
    noSwaps = true;
    for (let j = 0; j < index; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }

    if (noSwaps) break;
  }
}

let arr = [5, 1, 6, 17, 90, 23, 45, 36, 89, 100, 25];
console.log(`Input Arr : ${JSON.stringify(arr)}`);
bubbleSort(arr);
console.log(`Sorted Arr : ${JSON.stringify(arr)}`);
