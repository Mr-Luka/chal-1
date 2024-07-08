const myString = "developer";

const bigD = (myString.substring(0, 1)).toUpperCase();
const withoutD = myString.slice(1);
const finalWord = bigD + withoutD
console.log(finalWord)