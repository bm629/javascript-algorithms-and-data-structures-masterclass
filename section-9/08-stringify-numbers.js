// stringifyNumbers
// Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers 
// and converts them to strings. Recursion would be a great way to solve this!

/*
let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}
/*

stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj) {
    if(typeof obj === 'number') {
        return `${obj}`;
    } else if(Array.isArray(obj)) {
        let newObj = [];
        for(let index = 0; index < obj.length; index++) {
            newObj[index] = stringifyNumbers(obj[index]);
        }
        return newObj;
    } else if(typeof obj === 'object') {
        let newObj = {};
        for(let key in obj) {
            newObj[key] = stringifyNumbers(obj[key]);
        }
        return newObj;
    } else {
        return obj;
    }
    
}

console.log(`stringifyNumbers(obj) :: ${JSON.stringify(stringifyNumbers(obj))}`);