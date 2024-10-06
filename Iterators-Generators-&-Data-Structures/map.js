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

const peopleMap = new Map()
peopleMap.set('brad', {phone: '555-555-5555', email: 'brad@gmail.com'});
peopleMap.set('jack', {phone: '555-555-5555', email: 'jack@gmail.com'});
peopleMap.set('jill', {phone: '555-555-5555', email: 'jill@gmail.com'});

peopleMap.forEach(person=> console.log(person.email));
// brad@gmail.com
// jack@gmail.com
// jill@gmail.com
console.log(peopleMap.keys()) // MapIterator {'brad', 'jack', 'jill'}
console.log(peopleMap.values()); // MapIterator {{...}, {...}, {...}}
console.log(peopleMap.entries()); // MapIterator {'brad' => {...}, 'jack' => {...}}
// since these are iterators, we can use next method:
const iterator = peopleMap.values();
console.log(iterator.next()) // {value: {...}. done: false}
console.log(iterator.next()) // {value: {...}. done: false}
console.log(iterator.next()) // {value: {...}. done: false}
console.log(iterator.next()) // {value: {...}. done: true}

// We can convert maps to arrays.
const peopleArray = Array.from(peopleMap);
console.log(peopleArray) // [Array(2), Array(2), Array(2)]
// 0: (2) ['brad', {...}]
// 0: 'brad'
// 1: {phone: '555-555-5555', email: 'brad@gmail.com"}
// length: 2