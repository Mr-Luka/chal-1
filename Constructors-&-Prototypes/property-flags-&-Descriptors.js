/*
Properties in objects basically have these permissions that we can set:

[[Configurable]] - if 'true', the property can be deleted and these attributes can be modified,
otherwise not.

[[Enumerable]] - if 'true', the property will be returned in a 'for...in' loop, otherwise not.

[[Writable]] - 'true', the value of the property can be changed, otherwise not

[[Value]] - the value of the property
*/    

Math.PI = 4;
console.log(Math.PI); // 3.141592653589793

let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(descriptor); // configurable: false, enumerable: false, writable: false

const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
}

console.log(descriptor)
// configurable: true, enumerable: true, writable: true
// Whenever I create an object, it will always be set to true by default, 
// but the PI will be false, becasue how and why would you change it.

// Lets say we want to set those to false:
Object.defineProperty(rectObj, 'name', {
    writable: false,
    configurable: false,
    enumerable: false,
});
descriptor = Object.getOwnPropertyDescriptor(rectObj, 'name');
 console.log(descriptor)

 rectObj.name = 'New Name';
 delete rectObj.name; // writable, cus its false, it can not be changed
 console.log(rectObj.name); // Rectangle 1 - still stays the same, so it wasnt changed

 for (let [key, value] of Object.entries(rectObj)){
    console.log(`${key}: ${value}`) // width: 10 height: 10
 }
 // its not showing the name, becasue enumerable is set to false

 console.log(Object.getOwnPropertyDescriptors(rectObj)); // it will show everything in an object
 // with each showign if its permissions to false or true 