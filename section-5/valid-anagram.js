// my solution
function isValidAnagram1(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length) {
        return false;
    }

    let map1 = {};
    for (char of str1) {
        map1[char] = ++map1[char] || 1;
    }

    let map2 = {};
    for (char of str2) {
        map2[char] = ++map2[char] || 1;
    }

    for (key in map1) {
        if (map1[key] !== map2[key]) {
            return false;
        }
    }

    return true;
  }

  console.log(`isValidAnagram1 : ${isValidAnagram1('texttwisttime', 'timetwisttext')}`);


  // actual solution
function isValidAnagram2(str1, str2){
    // add whatever parameters you deem necessary - good luck!
    if(str1.length !== str2.length) {
        return false;
    }

    let map = {};
    for (char of str1) {
        map[char] = ++map[char] || 1;
    }

    for (char of str2) {
        if(!map[[char]]) {
            return false;
        }
        map[char] -= 1;
    }

    return true;
  }

  console.log(`isValidAnagram2 : ${isValidAnagram2('texttwisttime', 'timetwisttext')}`);