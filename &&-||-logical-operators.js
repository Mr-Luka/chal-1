// && 
console.log(10 > 20 && 30 > 15 && 40 > 30); // false
// When using &&, everything inside has to be true, to be true
console.log(30 > 20 && 30 > 15 && 40 > 30); // true

// OR operator
console.log(10 > 20 || 30 > 15); // true
// Its gonna be true, even tho the first one is false, because we are saying: OR
console.log(10 > 20 || 10 > 15); // false
// becasue both are false, it will show false


// && - Will return first falsy value or the last value
let a;

a = 10 && 20;
console.log(a) // 20
//We have 10 and 20, none of them are falsy, so it will return the last value, and thats 20
a = 10 && 20 && 30;
console.log(a) // 30
a = 10 && 0 && 30;
console.log(a) // 0
// We got 0 becasue 10 is true, 30 is true, and 0 is falsy, therefore it will return first falsy
// instead of the last value
a = 10 && '' && 0 && 30;
console.log(a) // ''
// We got '' becasue that is the FIRST falsy

// Practical example when we would use this:
// Lets say we are getting those from a database or from an API and we want to show them on the page
// lets say we want to show the first post
const posts = ['Post one', 'Post two']; // if its: []  then console.log(posts[0]) would equal: undefined
console.log(posts[0]) // Post one

const posts2 = [];
posts2.length > 0 && console.log(posts[0]) // it will properly log out empty, and when I things in an array
// it will show them.
// This is a very common way of using the && operator, used a lot in react when taking stuff from
// an API or wherever the data is coming from, we dont want to display something thats not there
// we want to check first to see if its there, so if that was false, it would return the last value.


// || - Will return the frist truthy value or the last value

let b;
b = 10 || 20
console.log(b) // 10
// It returns 10 becasue it will return the first truthy value, both of those are truthy, so it will return the first one

b = 0 || 20; // 0 is falsy, 20 is truthy
console.log(b) // 20
// It returns 20, becasue 0 is falsy and 20 is the last value

b = 0 || null || '' || undefined;
console.log(b) // undefined
// It returns undefined, becasue all of those are falsy, so it will return the last value


//  ?? - Returns the right side operand when the left is null or undefined
let c;
c = 10 ?? 20;
console.log(c) // 10
// It returns 10 because on the left side there is no null or undefined

c = null ?? 20;
console.log(c) // 20
// It returns 20 because on the left side its null

c = undefined ?? 20;
console.log(c) // 20
// It returns 20 because on the left side its undefined

c = 0 ?? 20;
console.log(c) // 0
// It returns 0 because on the left side its 0, which is falsy and not Null or undefined,
// Its not looking for falsy, just Null or undefined