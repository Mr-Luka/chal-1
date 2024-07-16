// for Loop
// Nested Loop
// Break & Continue

/*
Hight order array Methods which are methods that we can use on arrays that take in a function
as an argument and can use these methods to Loop through or iterate through arrays and do 
specific operations on each element and these are methods that you will be using all the time
in JavaScript


 for ([initialExpression]; [conditionalExpression]; [incrementExpression])
   statement;


- INITIAL EXPRESSION - Initializes a variable.
- CONDITIONAL EXPRESSION - Condition that the loop will continue to run as long
as it is met or until the condition is false.
- INCREMENT EXPRESSION - Expression that will be ececuted after each iteration
of the loop. Usually increments the variable.
- STATEMENT - Code that will be executed each time the loop is run.
To execute a 'block' of code, use the '{}' syntax
*/

// for (let i = 0; i <= 10; i++) {
//     console.log('Number ' + i);
// }
// Number 0
// Number 1
//..... Number 10

// for (let i = 5; i <= 11; i = i + 2) {
//     console.log('Number ' + i);
// }
// Number 5
// Number 7
// Number 9
// Number 11

// for (let i = 0; i <= 10; i++) {
//     if( i === 7) {
//         console.log('7 is my lucky number');
//     } else {
//         console.log('Number ' + i);
//     }
// }
// Number 0
// Number 1
//..... Number 2
// 7 is my lucky number
// Number 8
// Number 9 ...


// NESTED LOOPS
// for(let i = 1; i <= 10; i++){
//     console.log('Number ' + i);

//     for (let j = 1; j <= 5; j++){
//         console.log(`${i} * ${j} = ${i * j}`)
//     }
// }
// Number 1
// 1 * 1 = 1
// 1 * 2 = 2
// 1 * 3 = 3
// 1 * 4 = 4
// 1 * 5 = 5
// Number2
// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8
// 2 * 5 = 10
// Number 3 .....

// Loop throught an array ( wont use this one, becase we have: .forEach()).
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];
for (let i = 0; i < names.length; i++) {
    // console.log(names[i]);    // accesing each name by its indes [i]
    // saying: Sara is the best
    // if (i === 2) {
    //     console.log(`${names[i]} is the best`);
    // } else {
    //     console.log(names[i])
    // }
    // OR:
    if (names[i] === 'John') {
        console.log(`${names[i]} is the best`);  // John is the best
    } else {
        console.log(names[i])
    }
}
/*
Brad
Sam
Sara
John
Tim
*/



//    Break & Continue

// Break
// Break serves to break out of the loop. Usually I will check for a specific condition
// and then I am gonna break it
// for (let i = 0; i <= 20; i++) {
//     if(i === 15) {
//         console.log('Breaking...');
//         break;                          // Numbers to log out will be from 1 until 14 and break on 15 (not showing 15)
//     }
//     console.log(i)
// }


// Continue 
// With continue you can basically skip the rest of the code in a current iteration and 
// continue with the next iteration
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
        console.log('Skipping 13...');
        continue;             // its gonna count from 0 to 12, skip 13, and continue from 14 until 20
    }
    console.log(i)
}
