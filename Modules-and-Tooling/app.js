/* A Node.js application is run the command npm init.
What does is it creates a package.json file.
Now if you run it with no arguments, then its gonna ask you a bunch of questions,
first its gonna ask you the Package name.

package.json = is used for a lof of things, but one of the main things it's used for is to keep track
of my dependencies.
When we say dependecies, we mean packages, whatever you install.
When we run npm install whatever, that whatever is gonna get put in package.json.
when I instal a package, I will get another folder: package-lock.json which we dont touch
and also node_modules file, filled with bunch of other folders and files
The reason for that is this includes not only the Dependency that we installed,
but the dependency of that dependency, and then dependencies of those
dependencies. And this folder, you dont want to put like if you push to GitHub or
if you push to whatever, some kind of platform to host your application, you
dont want to push this node modules folder. The only place this should be is on your local machine.
The reason we don't need this is becasue if someone downloads your project, without the node modules folder,
they simply just have to run: npm install or npm i
And what will do, it will then install whatever you have in this dependencies object (in package.json),
and it will create the node modules folder.
What I can do to stop it from being pushed to GitHub is:
Create file called: .gitignore
and in that file, whatever you put, wheater if its a file or a folder,
whatever you put in there will not get pushed to GitHub

when i type in terminal: npm i -g axios (its gonna install it globaly in my system, not just my folder)
when I type in terminal: npm i -D nodemon(package that will constantly watch my application, so when I update it
    I dont have to run it again)

In package.json, I can change the: "scripts" from "test" to "start": "node app.js"
and add "dev": "nodemon app.js" so when I run it in terminal like: npm start and npm run dev
it will start the application and monitor it
*/
// How to use axios that we just installed

const axios = require('axios');

async function getPost() {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(res.data);
}
getPost();
/* with fetch api, we would have after response, to make const data = await res.json()
but with axios, the data is on the res/response object, so we don't need to do that,
so its just one promise instead of two.
If I didn't install axios, I wouldnt be able to use axios.get()
*/


























// async function getUser() {
//     const response = await fetch(`https://api.github.com/users/Mr-Luka`);
//     const data = await response.json();
//     console.log(data)
// }

// getUser();

/*
In the terminal of VS code, I would go in my folder, and I can just write node app, or node app.js,
and it will pretty much console log it in there, and I can see the info I fetched in the terminal.
*/


// Common JS modules!
// const capitalizeWords = require('./utils');
// console.log(capitalizeWords('hello everyone'));

// const { capitalizeWords, makeMoney} = require('./utils');
// const Person = require('./Person');

// const person1 = new Person ('John', 30);
// person1.greet(); // Hello, my name is John and I am 30
// // So now I have access to that person class from the person module.


// console.log(makeMoney(100))
