function sayHello(){
    console.log("Hello World");
}
sayHello();

// and these are parameters
function add(num1, num2) {
    console.log(num1 + num2);
}
// When you pass a value here, those are arguments
add(5, 10);

function subtract(num1, num2) {
    return num1 - num2;
// The reason why we return something is becase we want to do something with that value
}
const result = subtract(10, 2);
console.log(result, subtract(20, 5))



     // Parameters and Arguments ************ 

// Parameters are the variables that are defined in the function
// Default Params
function registerUser(user = 'Bot') {
    return user + ' is registered'
}
console.log(registerUser());

// Rest Parameters
// Rest Parameters accept any number of arguments
function sum(...numbers) { //I can use unlimited number of arguments and it will be put in an array
    let total = 0;
    for(const num of numbers) {[
        total += num
    ]}
    return total;
}
console.log(sum(1, 2, 3));   // 6

// Objects as params
function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
}
const user = {
    id: 1,
    name: 'John'
};
console.log(loginUser(user)) // The user John with the id of 1 is logged in
console.log(loginUser({
    id:2,
    name: 'Sara'
})) // The user Sara with the id of 2 is logged in