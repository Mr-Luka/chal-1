const message = {
    id: 1,
    text: 'Hello World',
};
module.exports = message;


function capitalizeWords(str) {
    return str
    .toLowerCase() // turning it into lower case
    .split(' ') // Split will turn it into an array, I wanna split by each word, so I will put space ' '
    .map((word)=> word[0].toUpperCase() + word.substr(1))
    .join(' ')
// Then Im gonna map through array of words and we will say: for each word, first letter its gonna be uppercase
// then I want to add the rest of it on, then I will use substr(1), we want to go over from the first one and
// then we want to turn it back into a string, becasue right now its an array with .join(' ') by the space
}

module.exports = capitalizeWords;