// Binary Search Exercise
// Write a function called binarySearch which accepts a sorted array and a value and returns the index at which the value exists.
// Otherwise, return -1.

// This algorithm should be more efficient than linearSearch -
// you can read how to implement it here - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search and
// here - https://www.topcoder.com/community/data-science/data-science-tutorials/binary-search/

// Examples:

// binarySearch([1,2,3,4,5],2) // 1
// binarySearch([1,2,3,4,5],3) // 2
// binarySearch([1,2,3,4,5],5) // 4
// binarySearch([1,2,3,4,5],6) // -1
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) // 2
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 95) // 16
// binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) // -1

function binarySearch(array, item) {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    if (array[middle] === item) {
      return middle;
    } else if (array[middle] > item) {
      max = middle - 1;
    } else {
      min = middle + 1;
    }
  }

  return -1;
}

console.log(
  `binarySearch([1,2,3,4,5],2) :: ${binarySearch([1, 2, 3, 4, 5], 2)}`
);
console.log(
  `binarySearch([1,2,3,4,5],3) :: ${binarySearch([1, 2, 3, 4, 5], 3)}`
);
console.log(
  `binarySearch([1,2,3,4,5],5) :: ${binarySearch([1, 2, 3, 4, 5], 5)}`
);
console.log(
  `binarySearch([1,2,3,4,5],6) :: ${binarySearch([1, 2, 3, 4, 5], 6)}`
);
console.log(
  `binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 10) :: ${binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    10
  )}`
);
console.log(
  `binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99 ], 95) :: ${binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    95
  )}`
);
console.log(
  `binarySearch([5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98, 99], 100) :: ${binarySearch(
    [
      5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
      99,
    ],
    100
  )}`
);
