// try {
//     console.log(x)
// } catch(error) {
//     console.log('Error: ' + error);
// }

// console.log(x); 
// try...catch.js:1 Uncaught ReferenceError: x is not defined
  //  at try...catch.js:1:13
// This means its not defined anywhere, so we need to try and catch it with using try...catch

function double (number){
    if (isNaN(number)){
        throw new Error(number + ' is not a number');
    }

    return number * 2;
}

try{
    const y = double('hello');
    console.log(y)
} catch(error) {
    console.log(error);
}