// JSON - JavaScript Object Notation
// Its a lightweight data interchange format
// Using JavaScript to parse JSON strings or turning JavaScript objects into Json strings
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// Convert to JSON string
const str = JSON.stringify(post) // {"id":1,"title":"Post One","body":"This is the body"}

// Parse (to divide into grammatical parts and identify the parts and their relations to each other)
const obj = JSON.parse(str); // We will get a regular: {id: 1, title: 'Post One', body: 'This is the body'}

const posts = [
    {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
    },
    {
    id: 2,
    title: 'Post Two',
    body: 'This is the body',
    },
]
const str2 = JSON.stringify(posts); // [{"id":1,"title":"Post One","body":"This is the body"},{"id":2,"title":"Post Two","body":"This is the body"}]
const obj2 = JSON.parse(str2); // (2) [{…}, {…}]
console.log(str2)