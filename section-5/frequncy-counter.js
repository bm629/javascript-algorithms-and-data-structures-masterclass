// my solution and actual solution is same
function isSame1(array1, array2) {
    let array1Length = array1.length;
    let array2Length = array2.length;

    if (array1Length !== array2Length) {
        return false;
    }

    let array1Map = {};
    for (value of array1) {
        array1Map[value] = ++array1Map[value] || 1;
    }

    let array2Map = {};
    for (value of array2) {
        array2Map[value] = ++array2Map[value] || 1;
    }

    for (key in array1Map) {
        let square = key * key;
        if(array1Map[key] !== array2Map[square]) {
            return false;
        }
    }

    return true;
}

console.log(`isSame1 : ${isSame1([1, 2, 3, 1, 5], [4, 9, 1, 1])}`);



// my solution improved
function isSame2(array1, array2) {
    let array1Length = array1.length;
    let array2Length = array2.length;

    if (array1Length !== array2Length) {
        return false;
    }

    let arrayMap = {};
    for (value of array1) {
        arrayMap[value * 2] = ++arrayMap[value] || 1;
    }

    for (value of array2) {
        if(!arrayMap[value]) {
            return false;
        } else {
            arrayMap[value] -= 1;
        }
    }

    return true;
}

console.log(`isSame2 : ${isSame1([1, 2, 3, 1, 5], [4, 9, 1, 1, 25])}`);