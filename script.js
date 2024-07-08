const myString = "developer";


// Solution 1
// const bigD = (myString.substring(0, 1)).toUpperCase();
// const withoutD = myString.slice(1);
// const finalWord = bigD + withoutD
// console.log(finalWord)


// Solution 2
// const bigD = (myString[0]).toUpperCase();
// const word = myString.substring(1);
// const finalWord = bigD.concat(word)
// console.log(finalWord)

// Solution 3
// let myNewString;

// myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// console.log(myNewString)

// Solution 4
// myNewString = myString[0].toUpperCase() + myString.substring(1);

// Solution 5
// myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
// console.log(myNewString)

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);

// Get the sum
const sum = x + y;
const output = `${x} + ${y} = ${sum}`;

// Get the difference
const diff = x - y;
const diffOutput = `${x} - ${y} = ${diff}`;
console.log(diffOutput)

// Get the product
const prod = x * y;
const prodOutput = `${x} * ${y} = ${prod}`;
console.log(prodOutput)

// Get the quotient
const quo = x / y;
const quoOutput = `${x} / ${y} = ${quo}`;
console.log(quoOutput)

// Get the remainder
const rm = x % y;
const rmOutput = `${x} % ${y} = ${rm}`;
console.log(rmOutput)
