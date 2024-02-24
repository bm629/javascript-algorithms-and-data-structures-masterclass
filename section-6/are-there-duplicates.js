// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// 1. frequncy counter pattern
function areThereDuplicates1() {
    // good luck. (supply any arguments you deem necessary.)
    let map = {};
    for (let i = 0; i < arguments.length; i++) {
        if(map[arguments[i]]) {
            return true;
        }

        map[arguments[i]] = true;
    }

    return false;
}

console.log(`areThereDuplicates1 :: ${areThereDuplicates1(1, 2, 3)}`);
console.log(`areThereDuplicates1 :: ${areThereDuplicates1(1, 2, 2)}`);
console.log(`areThereDuplicates1 :: ${areThereDuplicates1('a', 'b', 'c', 'a')}`);


// 2. multiple pointer pattern
function areThereDuplicates2(...args) {


    args.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });

      let start = 0;
      let next = 1;
      while (next < args.length) {
        if (args[start] === args[next]) {
          return true;
        }
        start++;
        next++;
      }
      return false;
}

console.log(`areThereDuplicates2 :: ${areThereDuplicates2(1, 2, 3)}`);
console.log(`areThereDuplicates2 :: ${areThereDuplicates2(1, 2, 2)}`);
console.log(`areThereDuplicates2 :: ${areThereDuplicates2('a', 'b', 'c', 'a')}`);