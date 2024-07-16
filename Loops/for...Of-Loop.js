// For... Of Loop

/*
For...Of Loop is newer way to basically Loop through iterable objects like Arrays
or even Strings and Maps and Sets.

Cleaner way to loop throught an array thena standard for...Loop or while...Loop
*/

const items = ['book', 'table', 'chair', 'kite'];
/* for loop, older way
for (let i = 0; i < items.length; i++) {
    console.log(items[i])
}
*/

for (let item of items) {
    console.log(item)
}
/* Get the same result and its much cleaner and more modern looking:
book
table
chair
kite
*/

// array with objects
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'},
];

for (let user of users) {
    console.log(user) 
    // {name: 'Brad'}
    // {name: 'Kate'}
    // {name: 'Steve'}
    console.log(user.name);
    // Brad
    // Kate
    // Steve
}


// Loop over STRINGS

const str = 'Hello World';

for (let letter of str) {
    console.log(letter)
}
