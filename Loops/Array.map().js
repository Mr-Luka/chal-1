/*
The .map() method creates a new array populates with the results of calling a provided function
on every element in the calling array.
*/
// Example 1:
const array1 = [1, 4, 9, 16];
// Pass a function to map, using x but it can be anything
const map1 = array1.map(x => x * 2);
console.log(map1) //2, 8, 18, 32]


// // Example2 :
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers2 = numbers2.map(number=> `Number ` + number)
//  If i were to use {} i would need to use Return keyword
// has to be numbers2, or it will be an error i think
console.log(doubledNumbers2) //  ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5']
