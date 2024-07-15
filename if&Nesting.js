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