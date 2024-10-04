/* Maps
Maps is another data structure, they are similar to objects where they have key value pairs.
However key doesn't need to be a string, it can be a number, array or an object.
*/

const myMap = new Map();

myMap.set('name', 'John');
myMap.set(1, 'blue');
myMap.set(2, 'red');

console.log(myMap.get('name')); // John
console.log(myMap.get(1)); // blue
console.log(myMap.get(1)); // red

console.log(myMap.size) //3 - it gives us the number of items in the map, which in this case is 3
console.log(myMap.has(1)); // true
console.log(myMap.has(3)) // false
myMap.delete(2);
console.log(myMap.has(2))