const myString = "developer";

// const bigD = (myString.substring(0, 1)).toUpperCase();
// const withoutD = myString.slice(1);
// const finalWord = bigD + withoutD
// console.log(finalWord)

const bigD = (myString[0]).toUpperCase();
const word = myString.substring(1);
const finalWord = bigD.concat(word)
console.log(finalWord)