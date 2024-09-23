const strLit = 'Hello';
const strObj = new String('Hello'); // constructor function

console.log(strLit, typeof strLit);
console.log(strObj, typeof strObj);

// Boxing - Boxing is when javaScript adds the wrapper object onto a literal
console.log(strLit.toUpperCase());
console.log(strLit[0]);

// Unboxing - is when an object is turned in back into a literal: valueOf()
console.log(strObj.valueOf(), typeof strObj.valueOf());

console.log(strLit.constructor); // String() { [native code] }
console.log(strObj.constructor); // String() { [native code] }

console.log(strLit instanceof String) // false/ because it's a literal we get false
console.log(strObj instanceof String) // true / cus it's an instance of string object

// Other Types:

const numLit = 20;
const numObj = new Number(20);

console.log(numLit, typeof numLit); // 20 'number'
console.log(numObj, typeof numObj); // Number {20} 'object'

const boolLit = true;
const boolObj = new Boolean(true);

console.log(boolLit, typeof boolLit); // true 'boolean'
console.log(boolObj, typeof boolObj); // Boolean {true} 'object'

const arrLit = [1, 2, 3, 4, 5];
const arrObj = new Array(1, 2, 3, 4, 5);

console.log(arrLit, typeof arrLit); // (5) [1, 2, 3, 4, 5] 'object'
console.log(arrObj, typeof arrObj); // (5) [1, 2, 3, 4, 5] 'object'

// function and object constructors
const funcLit = function (x) {
    return x * x;
 };
 console.log(funcLit, typeof funcLit); //(x){ return x * x; } 'function'   - it's an object
console.log(funcLit(5)) // 25

 const funcObj = new Function ('x', 'return x * x');
console.log( funcObj(3)) // 9

const obj1 = {};
const obj2 = new Object();
// When I write obj1 like that, its the same as obj2, it creates a new object
console.log(obj1, typeof obj1) // {} 'object'
console.log(obj2, typeof obj2) // {} 'object'