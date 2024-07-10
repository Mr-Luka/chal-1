// Parameters and Arguments
// Rest Parameters
// Objects as params
// Arrays as params
// Global & Function Scope
// BLOCK GLOBAL SCOPE
// Nested Scope
// Function Declaration vs Function Expression
// Arrow Functions
// Immediately invoked Function Expression



function sayHello(){
    console.log("Hello World");
}
// sayHello();

// and these are parameters
function add(num1, num2) {
    console.log(num1 + num2);
}
// When you pass a value here, those are arguments
// add(5, 10);

function subtract(num1, num2) {
    return num1 - num2;
// The reason why we return something is becase we want to do something with that value
}
const result = subtract(10, 2);
// console.log(result, subtract(20, 5))



     // *****        Parameters and Arguments       ****** 

// Parameters are the variables that are defined in the function
// Default Params
function registerUser(user = 'Bot') {
    return user + ' is registered'
}
// console.log(registerUser());

// *****        Rest Parameters        *****
// Rest Parameters accept any number of arguments
function sum(...numbers) { //I can use unlimited number of arguments and it will be put in an array
    let total = 0;
    for(const num of numbers) {[
        total += num
    ]}
    return total;
}
// console.log(sum(1, 2, 3));   // 6


// *****        Objects as params        *****
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'John'
};
// console.log(loginUser(user)) // The user John with the id of 1 is logged in
// console.log(loginUser({
//     id:2,
//     name: 'Sara'
// })) // The user Sara with the id of 2 is logged in

// *****        Arrays as params
function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length); // getting a random index

    const item = arr[randomIndex];
    // console.log(item)
}
getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) // it will give a random number between 1-10
// if the (arr) parameter is like that, but if we use (...arr) then its:
// getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // now it will give the random number as well
// and why i didnt have to use array brackets, is because when I use spread operator ... in the parameter
// it turns it automatically into an array


// *****        Global & Function Scope        *****

const x = 100;
// console.log(x, 'in global')
function run() {
    // console.log(window.innerHeight);
    // console.log(x, 'in function')
}
run()
if (true) {
    // console.log(x, 'in block')
};

function add() {
    const y = 50; // function scoped, wont work outside of this function
    const x = 1;
    // console.log(x + y) //x in this function overshadows the x thats outside this function 
}
add()

// *****        BLOCK GLOBAL SCOPE        *****
const q = 100;

if(true) {
    const y = 200;
    // console.log(q + y) // 300
}

for(let i = 0; i <= 10; i++) {
    // console.log(i) // 0 and then 1 then 2, 3, 4, 5, 6, 7, 8, 9, 10
}
// console.log(i) // error, i is not defined, because its only inside the block, not global
if(true) {
    const a = 500;
    let b = 600;
    var c = 700;
}
// console.log(a); error 
// console.log(b); error 
// console.log(c) // 700 since var is global scope, u want ur variables to be block scope const and let
// CONST and Let are block scoped, which means i can acces them outside if, loops, but not outside functions


// *****        Nested Scope        *****

function first () {
    const x = 100;

    function second () {
        const y = 200;
        // console.log( x + y) // in order for function Second to run, i have to run it outside, but inside first
    } // I can access from the variables from a parent scope, but not the other way around in a parent to acces childs scope/ variable
    second()
}
first();

if(true) {
    const x = 100;

    if(x === 100) {
        const y = 200;
        // console.log(x + y) // 300
    }
    // console.log(y) // error, i cant access y from a child
}

// *****        Function Declaration vs Function Expression
// Function Declaration
function addDollarSign(value) {
    return `$` + value;
}
// console.log(addDollarSign(100)); // $100
//If i move console.log() above the function declaration (hoising) it will work
// and that is only for function declarations

// Function Expression
const addPlusSign = function (value) {
    return `+` + value;
};
// console.log(addPlusSign(200)) // +200
//If i move console.log above, it wouldnt work for function expression

// *****        Arrow Functions

// function add(a, b) {
//     return a + b
// }
//Arrow function syntax
const addd = (a, b) => {
    return a + b;
};
// Implicit return arrow function, becasue we are not specifying the return keyword its jsut doing it
const subtractT = (a, b)=> a - b;

const double = a => a * 2;
// console.log(double(10)); // 20

// Returning an object
// const createObj = () => {
//     name: 'Brad';
// };
// console.log(createObj()) // it will return undefined
// If i want to return an object:
const createObj = () => ({
    name: 'Brad', 
});
// console.log(createObj())  // {name: 'Brad'}

// high order of functions
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(n){
    // console.log(n); // 1 then 2, 3, 4, 5
});
// Arrow function in a callback
// numbers.forEach(n=> console.log(n)); // same thing 1 then 2, 3, 4, 5



// *****        Immediately invoked Function Expression
// Immediately invoked Function Expression is a JavaScript function that runs as soon as it is defined

// Example:
// If I create another JavaScript file, that can be another library that we are using or whatever, and link that js as well (now we have two linked)
// and lets say in this script we have a global variable named USER.
// and in the main script, if we want to have a variable called USER as well, and soon as
// we run the main script, we will get an error saying that USER is already defined.
// because it has been declared in a global scope of the other file, there are few ways to handle it


(function (){
    const user = 'John';
    console.log(user); // John
    const hello = () => console.log('Hello from the IIFE');
    hello();
})();
// We will not get an error, and be able to use both user variables, because this function is not in a global scope
// this function is in a local scope, and it is not accessible outside of this function
// If I am to run: hello(), it will show an error, because hello is not defined, its scoped inside that IIFE, so 
// I have to run in inside

(function(name){
    console.log('Hello ' + name); 
})('Shawn') // Hello Shawn
//those are anonymous functions, no name associated with them

