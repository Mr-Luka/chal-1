// While Loop
// Loop over arrays - While Loop
// Nesting While Loops

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
while (i <= 5) {
    console.log('Number ' + i);

    let j = 1;
    while (j <= 5) {
        console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}