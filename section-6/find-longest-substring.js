// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring('') // 0
// findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6
// findLongestSubstring('thecatinthehat') // 7
// findLongestSubstring('bbbbbb') // 1
// findLongestSubstring('longestsubstring') // 8
// findLongestSubstring('thisishowwedoit') // 6
// Time Complexity - O(n)

// Check below youtube video for slide window animation
// https://www.youtube.com/watch?v=4i6-9IzQHwo

function findLongestSubstring(str) {
    let longest = 0;

    let seen = {};
    
    let start = 0;
    let end = 0;

    while(end < str.length) {
        const char = str[end];
        if(!seen[char]) {
            longest = Math.max(longest, end - start + 1);
            seen[char] = true;
            end++;
        } else {
            delete seen[str[start]];
            start++;
        }
    }

    return longest;
}

console.log(`findLongestSubstring :: ${findLongestSubstring('')}`);
console.log(`findLongestSubstring :: ${findLongestSubstring('rithmschool')}`);
console.log(`findLongestSubstring :: ${findLongestSubstring('thisisawesome')}`);
console.log(`findLongestSubstring :: ${findLongestSubstring('thecatinthehat')}`);
console.log(`findLongestSubstring :: ${findLongestSubstring('bbbbbb')}`);
console.log(`findLongestSubstring :: ${findLongestSubstring('longestsubstring')}`);
console.log(`findLongestSubstring :: ${findLongestSubstring('thisishowwedoit')}`);