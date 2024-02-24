// my solution 1
function countUniqueValues1(array) {
    let count = 0;
    let length = array.length;

    let ptr1 = 0;
    let ptr2 = 0;
    do {
        if(ptr1 === ptr2 && ptr1 < length) {
            count++;
        }

        if(array[ptr1] === array[ptr2]) {
            ptr2++;
        } else {
            ptr1 = ptr2;
        }


    } while(ptr2 < length)

    return count;
}

console.log(`countUniqueValues1 : ${countUniqueValues1([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])}`);


// my solution 2
function countUniqueValues2(array) {

    let length = array.length; 
    let count = length;

    let ptr1 = 0;
    let ptr2 = 1;

    while(ptr2 < length) {

        if(array[ptr1] === array[ptr2]) {
            count--;
            ptr2++;
        } else {
            ptr1 = ptr2;
            ptr2 = ptr2 + 1;
        }
    }
    return count;
}

console.log(`countUniqueValues2 : ${countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])}`);