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