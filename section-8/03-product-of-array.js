// productOfArray
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(array, index=0) {
    if(index >= array.length) {
        return 1;
    }

    return array[index] * productOfArray(array, index+1);
}

console.log(`productOfArray([1, 2, 3]) :: ${productOfArray([1, 2, 3])}`);
console.log(`productOfArray([1, 2, 3, 10]) :: ${productOfArray([1, 2, 3, 10])}`);