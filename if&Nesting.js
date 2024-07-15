// Else If & Nesting
// Truthy & Falsy Values

const d = new Date(10, 30, 2022, 6, 0, 0)  // Saturday January 12 1918 08:00
const hour = d.getHours(); // 8

// if (hour < 12) {
//     console.log('Good Morning')
// } else if (hour < 18) {
//     console.log('Good Afternoon')
// } else {
//     console.log('Good Night')
// }

// Nested IF
if (hour < 12) {
    console.log('Good Morning');

    if(hour === 6) {
        console.log('Wake up')
    }
} else if (hour < 18) {
    console.log('Good Afternoon')
} else {
    console.log('Good Night');

    if(hour >= 20) {
        console.log('zzzzzz')
    }
}

// Multiple conditions in IF statement
if (hour >= 7 && hour < 15) {     // && - and
    console.log('It is work time!')
}

if (hour === 6 || hour === 20) {  // || - or
    console.log('Brush your teeth')
}


// TRUTHY & FALSY VALUES
/*
If you have something you pass into an IF statement that's not something equal to or is something
greater then maybe you had just have a string like an email.
in this If statement I passed email, which is true, better say it was coerced to true, so anything
you pass in an IF statement it will be coerced into a boolean (true/false).
A string with ANYTHING IN IT is TRUTHY value, its always gonna result to true:

const email = 'test@test.gmail.com';
if(email) {
    console.log('You passed in an email')
}
*/

// FALSY VALUES:
/*
    false;
    0
    "" or '' (Empty String)
    null
    undefined
    NaN (Not a Number)
All of these are falsy, anything else will be truthy
*/
const x = false;
console.log(Boolean(x)) // false
// This is falsy:
if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

const y = 0;
// This is falsy:
if (y) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

const q = '';    // When building, and when something is subbmited as an empty string/ input
// if will show as false
// This is falsy:
if (q) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

const w = null;
// This is falsy:
if (w) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

const e = undefined;
// This is falsy:
if (e) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

const r = NaN;
// This is falsy:
if (r) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

/*   Truthy Values:
Everything else that is not falsy:

true
'0' (0 in a string)
' ' (space in a string)
'false' (false in a string)
[] (an empty array)
{} (an empty object)
function(){} (an empty function)
*/


// TRUTHY and Falsy Caveats (warning)
const children = 2;
if(children) {
    console.log(`You have ${children} children`)
} else {
    console.log('Please enter number of children')
} // You have 2 children, or You have 1 children, but what if I put children = 0 ?

const kids = 0;
// if (kids) {
//     console.log(`You have ${kids} children`)
// } else {
//     console.log('Please enter number of children')
// } // Please enter number of children. Why? because its 0 and that is falsy
// The solution is
if(kids !== undefined) { // OR: (!isNan(children)) - I am saying here that children is not a number
     console.log(`You have ${kids} children`)
} else {
     console.log('Please enter number of children')
}    // You have 0 children


// Checking for empty arrays
const posts = ['Post One', 'Post two'];
if(posts) {
    console.log('List Posts');
} else {
    console.log('No Posts');
} // List Posts

const posts2 = []; // Truthy
if(posts2.length > 0) {
    console.log('List Posts');
} else {
    console.log('No Posts to list');
}  // No Posts to list
// When I do console.log(posts.lenght) it will give me 1, therefore im fixing the truthty problem



// Checking for empty Objects
const user = {
    name: 'Brad'
}
if(user) {
    console.log('List User');
} else {
    console.log('No User');
} // List User

const user2 = {}; // Truthy
console.log(Object.keys(user2)) // []
// when using Object.keys on user2, we are turning it into an array, therefore I then can use
// .length
if (Object.keys(user2).length > 0) {
    console.log('List User');
} else {
    console.log('No User');
} // No User


// Loose Equality (==)
console.log(false == 0) // true
console.log('' == 0) // true
console.log(null == undefined) // true

console.log(false === 0) // false
console.log('' === 0) // false
console.log(null === undefined) // false
