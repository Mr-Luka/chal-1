/*
Palindrome means: a word that is spelled the same forwards as it is backwards, like:
wow, kayak, rotator...
*/

// Solution 1
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

// Solution 2
// function palindrome(str) {
//     return str.split('').every((char, index)=> {
//         return char === str[str.length - index - 1];
//     })
// }


module.exports = palindrome;