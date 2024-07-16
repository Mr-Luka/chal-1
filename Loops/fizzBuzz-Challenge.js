/*
- Pring/ log the numbers from 1 to 100
- For multiple of three print 'Fizz' instead of the number
- For multiple of five print 'Buzz'
- For numbers which are multiples of both three and five print 'FizzBuzz'

The way that we can figure out if it's a multiple of three is if the the
remainder is 0, and we can find the remainder using the modulus operator.
*/


// For Loop
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if( i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i)
    }
}
