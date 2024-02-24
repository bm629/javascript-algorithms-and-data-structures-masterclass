// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameFrequncy(num1, num2) {

    if(num1 <= 0 || num2 <= 0) {
        return false;
    }

    let map = {};

    while(num1 > 0) {
        let val = num1 % 10;
        map[val] = ++map[val] || 1;
        num1 = Math.floor(num1 / 10);
    }

    while(num2 > 0) {
        let val = num2 % 10;
        if(!map[val]) {
            return false;
        }

        map[val] -= 1;
        num2 = Math.floor(num2 / 10);
    }

    return true;
}

console.log(`sameFrequncy :: ${sameFrequncy(182, 281)}`);
console.log(`sameFrequncy :: ${sameFrequncy(34, 14)}`);
console.log(`sameFrequncy :: ${sameFrequncy(3589578, 5879385)}`);
console.log(`sameFrequncy :: ${sameFrequncy(22, 222)}`);