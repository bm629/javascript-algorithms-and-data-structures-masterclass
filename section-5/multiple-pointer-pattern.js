// my solution and actual solution is same
function sumZeroPair1(array) {

    let ptr1 = 0;
    let ptr2 = array.length - 1;

    while(ptr1 < ptr2) {
        let val1 = array[ptr1];
        let val2 = array[ptr2];

        let ans = val1 + val2;
        if (ans === 0) {
            return [val1, val2];
        } else if (ans > 0) {
            ptr2--;
        } else {
            ptr1++;
        }
    }

    return undefined;
}

console.log(`sumZeroPair1 : ${JSON.stringify(sumZeroPair1([-3, -2, -1, 0, 1, 2, 3]))}`);