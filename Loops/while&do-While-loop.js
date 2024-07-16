// While Loop
// Loop over arrays - While Loop
// Nesting While Loops
// DO... while Loops

// Old way of doing loops, since now we have high order array method, .forEach(), .forIn() and .forOf().
// important to know this becasue its fundemental

let i = 1;

// while(i < 20){
//     console.log('Number ' + i);
//     i++;    // I cant forget to put the condition otherwise it will be infinite loop.
// }
// It acheaves the same result as for loop.
// Many programmers follow a common rule, is to use for Loop when you number of times that you
// want the loop to run and then to use a While Loop when the number of times the loop is unknown.

// Loop over arrays - While Loop
// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;      // 10, 20, 30, 40
// }


// Nesting While Loops

// while (i <= 5) {
//     console.log('Number ' + i);

//     let j = 1;
//     while (j <= 5) {
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++;
//     }
//     i++;
// }
/*
Number 1
 1 * 1 = 1
 1 * 2 = 2
 1 * 3 = 3
 1 * 4 = 4
 1 * 5 = 5
 Number 2
 2 * 1 = 2
 2 * 2 = 4
 2 * 3 = 6
 2 * 4 = 8
 2 * 5 = 10
...... until and including Number 5
*/



//  ****         DO... while Loops           ****

// do while loop will run at least once even if the condition is false
// The question: when do I want to use a do while loop? is when you always want the block
// of code to run at least once even if the condition is never met.

do {
    console.log('Number ' + i);
    i++;
} while (i <= 20);     // this is where we want to put our condition
// This code is always gonna run once, even if the condition (while) is not true
// Number 1
// Number 2 ...
// ...Number 20

// Example with a condition that is not true
let j = 21;
do {
    console.log("Number " + j);
} while (j <= 20);
// This condition is never met, but it will run once no matter what and show:
// Number 21