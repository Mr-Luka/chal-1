/*
Palindrome means: a word that is spelled the same forwards as it is backwards, like:
wow, kayak, rotator...
*/

// Solution 1
function palindrome(str) {
    const reversed = str.split('').reverse().join('');
    return str === reversed;
}

module.exports = palindrome;