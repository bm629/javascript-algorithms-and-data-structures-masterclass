// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

// capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']

function capitalizeFirst (arr, index = 0) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];
    (function internal(arr, index) {
        if(index >= arr.length) {
            return;
        }
        let item = arr[index];
        result.push(item[0].toUpperCase() + item.slice(1, item.length));
        internal(arr, index + 1);
    })(arr, index);
    return result;
}

console.log(`capitalizeFirst(['car','taco','banana']) :: ${capitalizeFirst(['car','taco','banana'])}`);
