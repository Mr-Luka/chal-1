// Execution Context

/* Execution Context is when you run any JavaScript, a special environment is created to handle
the transformation & execution of code. This is called the Execution context.
It contains the currently running code and everything that ids in it's execution

There is a global execution context as well as a function execution context for every
function invoked.
*/

let x = 100;
let y = 50;
function getSum(n1, n2) {
    let sum = n1 + n2;
    return sum;
}
let sum1 = getSum(x, y);
let sum2 = getSum(10, 5);

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


/* 


*/