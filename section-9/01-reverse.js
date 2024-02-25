// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'

function reverse(str) {
    // add whatever parameters you deem necessary - good luck!
    if(!str) {
        return '';
    }
    let length = str.length;
    return str[length - 1] + reverse(str.substring(0, length - 1));
}

console.log(`reverse('awesome') :: ${reverse('awesome')}`);
console.log(`reverse('rithmschool') :: ${reverse('rithmschool')}`);