// Execution Context
// The Call Stack

/* Execution Context is when you run any JavaScript, a special environment is created to handle
the transformation & execution of code. This is called the Execution context.
It contains the currently running code and everything that ids in it's execution

There is a global execution context as well as a function execution context for every
function invoked.
*/

// let x = 100;
// let y = 50;
// function getSum(n1, n2) {
//     let sum = n1 + n2;
//     return sum;
// }
// let sum1 = getSum(x, y); // 150
// let sum2 = getSum(10, 5); // 15

/* 
Creation Phase:
let x = 100;    x Variable is allocated(izdvojeno) memory and stores "undefined". They are put into memory, but sored as undefined
let y = 50;     y Variable is allocated(izdvojeno) memory and stores as "undefined";
function getSum()  function is allocated memory and stores all the code, all the code within the function gets stored to memory

let sum1 = getSum(x, y)  sum1 variable is allocated memory and stores "undefined"
let sum2 = getSum(10, 5) sum2 variable is allocated memory and stores "undefined"

* Execution Phase:
Its going back from first line:
let x = 100;  Places the value of 100 into the x variable
let y = 50;   Places the value of 50 into the y variable
Then its gonna go to function getSum(), but its gonna skipt the function because there is nothing to execute, its just a function definition

let sum1 = getSum(x, y)  Invokes (call on) the getSum() function and creates a new function execution context
let sum2 = getSum(10, 5) Invokes (call on) the get 

* Function EC Creation Phase:
n1 & n2 Variables are allocated memory and stores "undefined"
sum Variable is allocated memory and stores "undefined"

* Function EC Execution Phase:
n1 & n2 are assigned 100 and 50 || reason why is that on sum1= getSum(x, y)we are passing x and y, which are 100 and 50
sum    | Calculation is done and 150 is put into the sum variable
return | Return tells the function EC to return to the global EC with the value of sum (150)
let sum1    | Returned sum value is put into the sum1 variable
let sum2    | Open another function execution context and do the same thing with different parameters

All of this is good to know when debugging
*/


// Execution Context in Action
/* 
In DevTools, next to console is: Sources, on the left side I can see my .js file, 
and when I click any line, that will be the line where the code will stop running, good for debugging

Lets say I press the line where x=100;
when I refresh the page the debugger will pause on that line, 
in the scope I will see that x and y are unavailable/undefined, It puts the variables in memory, and sets
them as undefined/unavailable before the execution.
Functions get stored in memory and the entire code in function gets stored in memory(that will be down in global beneath script in Scope)
When I scroll down I will see the function getSum() stored in a memory there.
on the left side of devTools, window next to scope, where is Play button, rotate, and Down arrow, 
when I press that, debugger will go one down and I will see in Scope that x is not undefined anymore, 
it will show x: 100; 
That means I started the execution phase.
When I press the down arrow again, y: 50     and it skips the function definition because there is nothing to execute
and its coming down to  -let sum1-  line where the function is being invoked. When we invoke a function it creates a new 
function execution context. Now when I press down arrow again it will go to the:
let sum = n1 + n2    line of code. Now I will see new area in Scope, which is called: LOCAL
Local area is where out function execution context is and show that n1: 100 and n2: 50, contains 150
because out first function call we passed in X and Y which are 150.
When I click DOWN ARROW again, it will put 150 into sum, which is one code line bellow
sum: 150.
When I click DOWN ARROW again, it will go all the way down to: let sum2, which is being passed 10 and 5
So its gonna open up a new execution context and go back into function with 10 and 5 as the arguments
as the variables. When I click again, its going to add Sum, sum: 15
When I click again, its going to go to the next line, which is Console.log and our script has been run
*/

let x = 100;
let y = 50;
function getSum(n1, n2) {
    let sum = n1 + n2;
    return sum;
}
let sum1 = getSum(x, y); // 150
let sum2 = getSum(10, 5); // 15

// console.log(sum1, sum2);



//          The CALL STACK

/*
When we run a function we know that it opens up a new function execution context
it also gets added to something called the Call Stack.
STACK is a data structure that operates in a very specific way: last in first out ( LIFO )
meaning that the last thing to come on is the first thing to come off


Frist one gets pushed, executed, then poped out, second, third
*/
// function first() {
//     console.log("first...")
// }
// function second() {
//     console.log("second...")
// }
// function third() {
//     console.log("third...")
// }
// first();
// second();
// third();

/* 
This functions are a bit different, what happens is:
We are running first() in the global scope and then in first() we are running second() and
in second() we are running third(). What happens is:
We run first it gets pushed on while first is Running, second is run so that gets put
on top of first becasue first is still running it's still open and then in second, third gets called
so second is still running so third gets pushed on when third ends, third gets popped off
and second ends gets popped off and first popped off.
*/
function first() {
    console.log("first...");
    second();
}
function second() {
    console.log("second...")
    third()
}
function third() {
    console.log("third...")
}
first();