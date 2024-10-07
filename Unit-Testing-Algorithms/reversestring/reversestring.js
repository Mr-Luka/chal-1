// // Solution 1
// function reverseString(str) {
//     return str.split('').reverse().join('');
// //we are taking a string, turning it into an array, each letter will be array item,
// // then we reverse the array, and then we join the array back into a string
// }


//Solution 2
// function reverseString(str) {
//     let reversed = '';
//     for(let char of str) {
//         reversed = char + reversed; // appending it on while looping
//     }
//     return reversed;
// }

// Solution 3
function reverseString(str) {
    return str.split('').reduce((reversed, char)=> char + reversed, '');
// reduce() is a high order function, that accepts parameters
}

module.exports = reverseString;