// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// let words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']

function capitalizeWords (words) {
    // add whatever parameters you deem necessary - good luck!
    let result = [];

    (function internal(arr, index) {
        if(index >= arr.length) {
            return;
        }
        result.push(arr[index].toUpperCase());
        internal(arr, index + 1);
    })(words, 0);

    return result;
}

console.log(`capitalizeWords(['i', 'am', 'learning', 'recursion']) :: ${capitalizeWords(['i', 'am', 'learning', 'recursion'])}`);