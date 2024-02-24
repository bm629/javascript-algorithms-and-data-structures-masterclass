// Search index of element in sorrted array

function searchIndex1(array, element) {
    let min = 0;
    let max = array.length - 1;

    while (min <= max) {
        let middleIndex = Math.floor((min + max) / 2);

        let val = array[middleIndex];

        if(element == val) {
            return middleIndex;
        } else if(element > array[middleIndex]) {
            min = middleIndex + 1;
        } else {
            max = middleIndex - 1;
        }
    }

    return -1;
}

console.log(`searchIndex1 : ${searchIndex1([1, 2, 3, 4, 5, 6], 4)}`);
console.log(`searchIndex1 : ${searchIndex1([1, 2, 3, 4, 5, 6], 6)}`);
console.log(`searchIndex1 : ${searchIndex1([1, 2, 3, 4, 5, 6], 11)}`);