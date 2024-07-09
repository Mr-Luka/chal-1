let x
// Array Literal
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'Hello', true, null];
// Array Constructor
const fruits2 = new Array('apple', 'grape', 'orange');
///
x = numbers[0]; // 12
x = numbers[0] + numbers[3]; // 41
x = `My favorite fruit is ${fruits2[2]}`;
x = numbers.length; // 5
fruits2[2] = 'pear'; // change item in an array
fruits2[3] = 'strawberry';
x = fruits2;
// console.log(x);
// Basic Array METHODS
let y;
const arr = [34, 55, 95, 20, 15];

arr.push(100);  // adds 100 to the end of array
arr.pop(); // remove last item in array
arr.unshift(200); // adds 200 to the beginning of array
arr.shift(); // removes first item in array
// arr.reverse(); // reverses the order of the array

y = arr.includes(20); // true/ false
y = arr.indexOf(15); // returns the index of the item in the array
// if the number doesnt exist it will give me -1
y = arr.slice(1, 4); // cuts out the portion of array: from index 1 to index 4 (4 not included).
// it doesnt change original array, it returns new array (55, 95, 20)
// y = arr.splice(1, 4); // first is the index number, and second is how many i want to go over (55, 95, 20, 15)
// S P L I C E
// y = arr.splice(3, 1); // if I want to get out just 1 number (20) and the original array doesnt have that 20 anymore
// Thats how you can remove single element in an array

y = arr.splice(1, 4).reverse().toString().charAt(0);
// .charAt(0); - taking the first character of the word
//If i was to run .charAt on an array it woudnt work, only string
// console.log(y);


//    ARRAY NESTING Concat and SPREAD    //
let z;

const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'bluberry', 'rasberry'];

// fruits.push(berries);   // putting array inside array with push
// z = fruits[3][1] // accesing bluberry which is in an array inside the fruits array
const allFruits = [fruits, berries]; // it will give me array of two arrays
z = allFruits[1][0]; // accesing second array and chosing the first item which is strawberry

z = fruits.concat(berries); // merging two arrays into one single array that has everthing from both arrays
// these two are the same
z = [...fruits, ...berries] // Spread operator, used more with objects, but its also good for arrays


console.log(z)