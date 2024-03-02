function getDigit(num, place) {
    let base = Math.pow(10, place);
    let actualNumber = Math.floor(Math.abs(num) / base);
    return actualNumber % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigits(arr) {
    let maxDigits = 0;

    for(let i = 0; i < arr.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }

    return maxDigits;
}

function radixSort(arr) {
    let max = maxDigits(arr);

    for(let place = 0; place < max; place++) {
        let buckets = Array.from({ length: 10 }, () => []);

        for(let index = 0; index < arr.length; index++) {
            let num = arr[index];
            const digit = getDigit(num, place);
            buckets[digit].push(num);
        }

        arr = [].concat(...buckets);

    }

    return arr;
}

console.log(getDigit(12345, 0));
console.log(getDigit(12345, 1));
console.log(getDigit(12345, 2));
console.log(getDigit(12345, 3));
console.log(getDigit(12345, 4));
console.log(getDigit(12345, 5));

console.log(`*************`);
console.log(digitCount(0));
console.log(digitCount(1));
console.log(digitCount(25));
console.log(digitCount(314));
console.log(digitCount(12345));

console.log(`*************`);

console.log(maxDigits([1, 30, 355, 7236476, 445, 346834, 2334]));

console.log(`*************`);

console.log(radixSort([1, 30, 355, 7236476, 445, 346834, 2334]));