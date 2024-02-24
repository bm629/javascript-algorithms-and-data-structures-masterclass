// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(substring, string) {
    if(substring.length > string.length) {
        return false;
    }

    let substringPointer = 0;
    let stringPointer = 0;
    let length = string.length;
    let substringLength = substring.length;

    while(stringPointer < length) {

        let substringChar = substring[substringPointer];
        let stringChar = string[stringPointer];

        if(substringChar === stringChar) {
            substringPointer++;
            stringPointer++;
        } else {
            stringPointer++;
        }

        if(substringPointer === substringLength) {
            return true;
        }
    }

    return false;
}

console.log(`isSubsequence :: ${isSubsequence('hello', 'hello world')}`)
console.log(`isSubsequence :: ${isSubsequence('sing', 'sting')}`)
console.log(`isSubsequence :: ${isSubsequence('abc', 'abracadabra')}`)
console.log(`isSubsequence :: ${isSubsequence('abc', 'acb')}`)