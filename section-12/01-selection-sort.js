function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function selectionSort(arr) {
  let minIndex;

  for(let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (j = i + 1; j < arr.length; j++) {
      console.log(`Comparing : ${arr[j]} - ${arr[minIndex]}`);
      if(arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    console.log(`Iteration Complete`);

    if(i !== minIndex) {
      swap(arr, i, minIndex);
    }
  }
}

let arr = [5, 1, 6, 17, 90, 23, 45, 36, 89, 100, 25];
console.log(`Input Arr : ${JSON.stringify(arr)}`);
selectionSort(arr);
console.log(`Sorted Arr : ${JSON.stringify(arr)}`);
