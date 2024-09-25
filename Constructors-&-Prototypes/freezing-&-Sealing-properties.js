/*
Sealing - Prevents properties from being added or removed. Can still be changed.

Freezing - Prevents properties from being added, removed or changed
*/

const rectObj = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
}

Object.seal(rectObj); // Configurable is set to false, everything else is true by default

let descriptors = Object.getOwnPropertyDescriptors(rectObj);
// console.log(descriptors)
rectObj.color = 'red'; // can not be added
delete rectObj.name; // can not be deleted
rectObj.width = 20; // but it can be changed
console.log(rectObj)

const circleObj = {
    name: 'Circle 1',
    radius: 30,
}
Object.freeze(circleObj); // Configurable, writable, and enumerable are set to false
descriptors = Object.getOwnPropertyDescriptors(circleObj);
circleObj.color = 'blue'; // it can not add
delete circleObj.name; // it can not delete
circleObj.name = 'New Name'; // it can not edit
console.log(descriptors);

console.log('rectObj is sealed?', Object.isSealed(rectObj)); // rectObj is sealed? true
console.log('rectObj is frozen?', Object.isFrozen(rectObj)); // false
console.log('circleObj is sealed?', Object.isSealed(rectObj)); // true
console.log('circleObj is frozen?', Object.isFrozen(rectObj));  // false