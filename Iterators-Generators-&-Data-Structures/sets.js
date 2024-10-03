/* SETS
Sets are a data structure that allow us to store a collection of unique values.
So they are unordered and they do NOT allow duplicates.

Sets are very useful when you want to store a collection of values that you want to check for 
membership, but you dont care about the order of the values.
*/

// const set = new Set([1, 2, 2, 3, 3, 4, 4]);
// console.log(set) // {1, 2, 3, 4} - it will not show the duplicates

const set = new Set([1, 2, 3, 4]);
set.add(5) //-  to add to the set use .add() method
console.log(set.has(3)) // - to check if we have something in the set
console.log(set.has(6))// - false
set.delete(5)
console.log(set.has(5)) // false
console.log(set)

const setArray = Array.from(set)
console.log(setArray) // [1, 2, 3, 4]

for (let item of set) {
    console.log(item)
} // 1, 2, 3, 4

const iterator = set.values();
console.log(iterator.next()) // {value: 1, done: false}
console.log(iterator.next()) // {value: 2, done: false}
console.log(iterator.next()) // {value: 3, done: false}
console.log(iterator.next()) // {value: 4, done: false}
console.log(iterator.next()) // {value: undefined, done: true} - it will stop when 
// it will reach the end of the set.

set.clear();
console.log(set) // Set(0) {size: 0}