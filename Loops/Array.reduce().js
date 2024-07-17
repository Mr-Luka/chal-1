/*            .reduce()
The .reduce() method executes a user-supplied 'reducer' callback function on each element
of the array, in order, passing in the return value from the calculation on the 
preceding element.
The final result of running the reducer across all elements of the array is a single value.

The frist tat the callback is run there is no "return value of the previous calcualtion"
If supplied, an initial value may be used in its place. Otherwise the array element at
index 0 is used as the iitial value and iteration starts from the next element (index 1
instead of index 0).

Perhaps the easiest-to-understand case for reduce() is to return the sum of all the elements
in an array.
*/

const array = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array.reduce((previousValue, currentValue)=>
previousValue + currentValue, initialValue);
console.log(sumWithInitial); // 10
// How? 0 + 1 + 2 + 3 + 4 = 10