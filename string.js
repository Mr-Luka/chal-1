const myString = "developer";


// Solution 1
const bigD = (myString.substring(0, 1)).toUpperCase();
const withoutD = myString.slice(1);
const finalWord = bigD + withoutD
console.log(finalWord)


// Solution 2
// const bigD = (myString[0]).toUpperCase();
// const word = myString.substring(1);
// const finalWord = bigD.concat(word)
// console.log(finalWord)

// Solution 3
let myNewString;

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

console.log(myNewString)

// Solution 4
myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 5
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString)

