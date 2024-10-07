// Solution 1
function reverseString(str) {
    return str.split('').reverse().join('');
//we are taking a string, turning it into an array, each letter will be array item,
// then we reverse the array, and then we join the array back into a string
}

module.exports = reverseString;