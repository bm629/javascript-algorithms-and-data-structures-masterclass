// collectStrings
// Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    let result = [];

    (function internal(obj) {
        if(typeof obj === 'string') {
            result.push(obj);
        } else if(typeof obj === 'object' && !Array.isArray(obj)) {
            for (let key in obj) {
                internal(obj[key]);
            }
        }
    })(obj);

    return result;
}

console.log(`collectStrings(obj) :: ${JSON.stringify(collectStrings(obj))}`); // ["foo", "bar", "baz"])