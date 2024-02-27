function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// my solution
function insertionSort1(arr) {
  for(let i = 1; i < arr.length; i++) {
    let swapIndex = i;
    for(j= i - 1; j >= 0; j--) {
      if(arr[swapIndex] < arr[j]) {
        swap(arr, swapIndex, j);
        swapIndex = j;
      }
    }
  } 
}

// Actual Soln
function insertionSort2(arr) {
  for(let i = 1; i < arr.length; i++) {
    let j;
    let currentValue = arr[i];
    for(j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
  } 
}

let arr1 = [5, 1, 6, 17, 90, 23, 45, 36, 89, 100, 25];
console.log(`My Soln :: Input Arr : ${JSON.stringify(arr1)}`);
insertionSort1(arr1);
console.log(`My Soln :: Sorted Arr : ${JSON.stringify(arr1)}`);

let arr2 = [5, 1, 6, 17, 90, 23, 45, 36, 89, 100, 25];
console.log(`Actual Soln :: Input Arr : ${JSON.stringify(arr2)}`);
insertionSort2(arr2);
console.log(`Actual Soln :: Sorted Arr : ${JSON.stringify(arr2)}`);
