const getUsers = async () => {
    try {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('https://httpstat.us/404');

        if(!response.ok) {
            throw new Error('Request failed')
        }

        const data = await response.text();
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}
// This is a good way to do it because it can catch the error before it runs, and that way
// reacts how you want it with error. This way is prefered.
// getUsers();


// This other way how to catch the error, this way we just call it on the function that we call
// after the function.
const getPosts = async () => {
        // const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const response = await fetch('https://httpstat.us/500');

        if(!response.ok) {
            throw new Error('Request failed')
        }

        const data = await response.text();
        console.log(data)
}
getPosts().catch(error=> console.log(error));
