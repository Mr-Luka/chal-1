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

// Flatten arrays
const nestedArray = [1, 2, [3, 4], 5, [6, 7], 8]; // array with two nested arrays
z = nestedArray.flat() //  flatened array, [1, 2, 3, 4, 5, 6, 7, 8]


// STATIC METHODS on array object 

z = Array.isArray(fruits) // checking to see if its array, it will give True / False
z = Array.from('12345'); // It takes a string and gives us an array [1, 2, 3, 4, 5]
z = Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']

const a = 'Hello';
const b = 2;
const c = 3;
z = Array.of(a, b, c); // it will give us an array of the values of the variables ['Hello', 2, 3];
// console.log(z)



//  ARRAY CHALLENGES
let chal
const chal1 = [1, 2, 3, 4, 5];
chal = chal1.unshift(0);
chal = chal1.push(6);
chal = chal1.reverse()
// console.log(chal);

let chall;
const chal2 = [1, 2, 3, 4, 5];
const chal22 = [5, 6, 7, 8, 9, 10];
// chall = chal2.pop();
// chall = [...chal2, ...chal22];

// chall = chal2.slice(0, 4).concat(chal22);
chall = [...chal2, ...chal22];
chall.splice(4, 1);
// console.log(chall)

// DESTRUCTURING ARRAY
const numbers2 = [23, 67, 33, 49, 52];
const [first, second] = numbers2; // It will give me frist two numbers: 23, 67

const [one, two, ...rest] = numbers2; // 23, 67 [33, 49, 52]
console.log(first, second, rest) 