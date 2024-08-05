const promise = new Promise ((resolve, reject)=> {
    setTimeout(()=> {
        let error = false;

        if( !error ){
            resolve({ name: 'John', age: 30});
        } else {
            reject('Error: Something went wrong');
        }
    }, 1000);
})

/* Lets say that I go and return from .then() return user.name, name property of the
user object that was resolved in the promise. So whatever I return from .then(),
I can actually access in another .then(), and add another .then() and pass in name


We are getting the object first, cuz we are console logging, then we return user.name, 
and we are console logging the name, from there we return the length of the name
so we are passing it into .then() and then we are logging the name link.

This is great if I have multiple asynchronous operations and this is to fix callback hell.
If I were to change the error from false to true, none of this will run, because we set it up
in the reject: Error: Something went wrong, it will automatically run the .catch()
If I put .then() after then .catch(), that .then() will run no matter what, because
.catch() pertains to the .then-s() before it.
anf if there is no error true, it will skip the .catch() and continue with .then()
*/

promise.then((user)=>{
    console.log(user); // getting the user object { name: 'John', age: 30}
    return user.name;
}).then((name)=> {
    console.log(name) // John
    return name.length;
})
.then((nameLength)=> {
    console.log(nameLength) // 4
})
.catch((error)=> {
    console.log(error);
    return 123;
})
.then((x)=> console.log('This will run no matter what', x));
// This will run no matter what 123