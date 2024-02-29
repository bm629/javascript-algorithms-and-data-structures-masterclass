function merge(arr1, arr2) {
    let result = [];

    let arr1Index = 0;
    let arr2Index = 0;

    while(arr1Index < arr1.length || arr2Index < arr2.length) {
        if(arr1Index === arr1.length || (arr2Index < arr2.length && arr2[arr2Index] < arr1[arr1Index])) {
            result.push(arr2[arr2Index++]);
        } else {
            result.push(arr1[arr1Index++]);
        }
    }

    return result;
}

function mergeSort(arr) {
    const length = arr.length;
    if(length === 0 || length === 1) {
        return arr;
    }

    let middleIndex = Math.floor(length/2);
    let arr1 = arr.slice(0, middleIndex);
    let arr2 = arr.slice(middleIndex);

    let sortedArray1 = mergeSort(arr1);
    let sortedArray2 = mergeSort(arr2);

    return merge(sortedArray1, sortedArray2);
}

let arr = [5, 1, 6, 17, 90, 23, 45, 36, 89, 100, 25];
console.log(`Input Arr : ${JSON.stringify(arr)}`);
arr = mergeSort(arr);
console.log(`Sorted Arr : ${JSON.stringify(arr)}`);