/* Ternary Operator
Ternary Operator is a shorter way for writing a conditional
*/

const age = 19;

// Using an if statement
if(age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You cannot vote!');
}


// Ternary Operator:
age >= 18 ? console.log('You can vote!') :  console.log('You cannot vote!');
// first part we evaluate the condition: age >= 18
// ?  - like if, what will happen if true
// :  - what will happen if thats false


// Assigning a conditional value to a variable
const canVote = age >= 18 ? true : false; // true
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote'; // You can vote!

console.log(canVote);
console.log(canVote2);


// Multiple statements

const auth = true;
// let redirect;

// if(auth) {
//     alert('Welcome to the dashboard');
//     redirect = '/dashboard';
// } else {
//     alert('Access Denied');
//     redirect = '/login';
// }

// Faster and shorter way
const redirect = auth ? 
    (alert('Welcome to the dashboard'), '/dashboard') : 
    (alert('Access Denied'), '/login');
console.log(redirect) // /dashboard


// We can use shorthand, AND operator as a shorthand, if there is no Else
auth ? console.log('Welcome to the dashboard') : null; // Welcome to the dashboard
// after : I can not just put ; i need to put null; and thats it

// Even shorter:
auth && console.log('Welcome to the dashboard');