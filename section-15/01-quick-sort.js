function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

function pivot(arr, startIndex = 0, endIndex=(arr.length - 1)) {

    console.log(`${startIndex} - ${endIndex}`);

    let pivotValue = arr[startIndex];
    let pivotIndex = startIndex;

    for(let index = startIndex + 1; index <= endIndex; index++) {
        if(pivotValue > arr[index]) {
            swap(arr, ++pivotIndex, index);
        }
    }

    swap(arr, startIndex, pivotIndex);

    return pivotIndex;
}

function quickSort(arr, startIndex = 0, endIndex=(arr.length - 1)) {

    if(startIndex < endIndex) {
        const pivotIndex = pivot(arr, startIndex, endIndex);

        quickSort(arr, startIndex, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, endIndex);
    }
}

let arr = [4, 8, 2, 1, 5, 7, 6, 3];
console.log(`Input Arr : ${JSON.stringify(arr)}`);
quickSort(arr);
console.log(`Sorted Arr : ${JSON.stringify(arr)}`);
