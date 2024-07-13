// Else If & Nesting

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

