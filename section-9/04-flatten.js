// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

function flatten(arr) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];

    (function internal(arr) {
        if(Array.isArray(arr)) {
            for (let item of arr) {
                internal(item);
            }
        } else {
            result.push(arr);
        }
    })(arr);

    return result;
}

console.log(`flatten([1, 2, 3, [4, 5] ]) :: ${flatten([1, 2, 3, [4, 5] ])}`);
console.log(`flatten([1, [2, [3, 4], [[5]]]]) :: ${flatten([1, [2, [3, 4], [[5]]]])}`);
console.log(`flatten([[1],[2],[3]]) :: ${flatten([[1],[2],[3]])}`);
console.log(`flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) :: ${flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])}`);