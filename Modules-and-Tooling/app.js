// async function getUser() {
//     const response = await fetch(`https://api.github.com/users/Mr-Luka`);
//     const data = await response.json();
//     console.log(data)
// }

// getUser();

/*
In the terminal of VS code, I would go in my folder, and I can just write node app, or node app.js,
and it will pretty much console log it in there, and I can see the info I fetched in the terminal.
*/


// Common JS modules!
// const capitalizeWords = require('./utils');
// console.log(capitalizeWords('hello everyone'));

const { capitalizeWords, makeMoney} = require('./utils');
const Person = require('./Person');

const person1 = new Person ('John', 30);
person1.greet(); // Hello, my name is John and I am 30
// So now I have access to that person class from the person module.


console.log(makeMoney(100))
