async function getUser() {
    const response = await fetch(`https://api.github.com/users/Mr-Luka`);
    const data = await response.json();
    console.log(data)
}

getUser();

/*
In the terminal of VS code, I would go in my folder, and I can just write node app, or node app.js,
and it will pretty much console log it in there, and I can see the info I fetched in the terminal.
*/