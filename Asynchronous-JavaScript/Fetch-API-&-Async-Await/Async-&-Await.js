const promise = new Promise ((resolve, reject)=> {
    setTimeout(() => {
        resolve({name: 'John', age: 20});
    }, 1000)
})

// promise.then(data=> console.log(data));

async function getPromise () {
    const response = await promise;
    console.log(response);
}

// getPromise()

// newer and better with Async and await
async function getUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    console.log(data)
}

// with .then() and .catch()
function getUsers () {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data)=> console.log(data))
}
// getUsers()


// Async & Await with arrow function