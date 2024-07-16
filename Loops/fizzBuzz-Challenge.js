/*
- Pring/ log the numbers from 1 to 100
- For multiple of three print 'Fizz' instead of the number
- For multiple of five print 'Buzz'
- For numbers which are multiples of both three and five print 'FizzBuzz'

The way that we can figure out if it's a multiple of three is if the the
remainder is 0, and we can find the remainder using the modulus operator.
we have to check first for FizzBuzz because it overlaps the Fizz and Buzz, so when
whe check that first, we can check for Fizz and then Buzz
*/


// For Loop
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log('FizzBuzz');
//     } else if( i % 3 === 0) {
//         console.log('Fizz');
//     } else if (i % 5 === 0) {
//         console.log('Buzz');
//     } else {
//         console.log(i)
//     }
// }


// While Loop
let j = 1;
while (j <= 100) {
    if (j % 3 === 0 && j % 5 === 0){
        console.log('FizzBuzz');
    } else if (j % 3 === 0) {
        console.log('Fizz')
    } else if (j % 5 === 0) {
        console.log('Buzz')
    } else {
        console.log(j);
    }
    j++;
}