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

/*
.reduce() takes in the function, like the rest of methods, and there are two arguments
1) previousValue(accumulator) & 2) currentValue
And you can pass on as an additional argument: initial value, which you can put as whatever
you want, but its usually 0. Becasue for your first Loop through you are not going to have
previous value so you can set that there.
Initial value is not required
*/
// Longer version to understand better
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue){
    return accumulator + currentValue
}, 0) // I set 0 as initial value
console.log(sum) // 55

// Shorter:
const sum2 = numbers.reduce((acc, cur)=> acc + cur, 0);
console.log(sum2) // 55

// Using a for loop for the same thing (which is little bit longer):
const sum3 = () => {
    let acc = 0;
    for (let number of numbers) {
    // acc = acc + number;
    acc += number;
    }
    return acc;
}
console.log(sum3()) // 55


// Realistic example with Shopping Cart
const cart = [
    {id: 1, name: 'Product 1', price: 130},
    {id: 2, name: 'Product 2', price: 150},
    {id: 3, name: 'Product 3', price: 175},
];
// Get the total of the prices using .reduce().
const total = cart.reduce( (acc, product )=>  acc + product.price, 0);
console.log(total) // 455
// acc + product.price, 0
// accumulator which is the previous value, and we set it to 0, + current value of the price
// 0 + 130 + 150 + 175 = 455