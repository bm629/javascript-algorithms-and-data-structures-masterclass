// my solution and actual solution is same
function maxSubarraySum1(array, num) {
    let length = array.length;

    if (num <= 0 || num > length) {
        return null;
    }

    let maxSum = 0;
    for(let i = 0; i < num; i++) {
        maxSum += array[i];
    }

    let tempSum = maxSum;
    for(let j = num; j < length; j++) {
        tempSum = tempSum + array[j] - array[j - num];
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}

console.log(`maxSubarraySum1 : ${maxSubarraySum1([1, 2, 3], 0)}`);