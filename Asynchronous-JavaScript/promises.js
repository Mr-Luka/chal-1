/* Promises
A promise is a object that represents the evenual completion or the failure of an
asynchronous operation.
The concept is that a promise is a promise to a script.js that it will complete some kind
of task or operation such as fetching data from a server, some asynchronous operation,
meanwhile the rest of the code will continue to execute, so it's asynchronous and non-blocking.
When the task is complete, the promise is either fulfilled or rejected, and it also prevents us
from entering callback hell.


When the promise completes and it's successful, we call RESOLVE, and if there is some kind
of error and the promise can't be fulfilled, then we call REJECT.
*/

// Create a promise
// const promise = new Promise ((resolve, reject)=> {
//     // Do some async task
//     setTimeout(()=> {
//         console.log('Async task complete');
//         resolve();
//     }, 1000);
// })

// promise.then(()=> {
//     console.log('Promise resolved');
// })

// new Promise ((resolve, reject)=> {
//     // Do some async task
//     setTimeout(()=> {
//         console.log('Async task complete');
//         resolve();
//     }, 1000);
// }).then(()=> console.log('Promise 2 resolved'))
// So I can put a promise in a variable and call .then() on the variable, or I can put it
// right on the promise itself.

console.log('Hello from global scope')


const getUser = new Promise((resolve, reject)=> {
    setTimeout(()=> {
        let error = false;

        if(!error){
            resolve({ name: 'John', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

getUser.then((user) => console.log(user))
.catch((error)=> console.log(error))
.finally(()=> console.log('The Promise has been resolved or rejected'))

// If it catches error, console will show: Error: Something went wrong
// becasue that's what i Passed to do in reject()
// .finally() will show in console: The Promise has been resolved or rejected
// because it will run regardless of whether the promise was resolved or rejected.
// It's like a finally block in a try/catch block. It will run after the promise (rarely used)