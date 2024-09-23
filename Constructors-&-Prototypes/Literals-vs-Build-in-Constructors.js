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
console.log(strObj instanceof String)