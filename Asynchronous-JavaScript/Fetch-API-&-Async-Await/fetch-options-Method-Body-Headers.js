// function creatPost(post) {
//     fetch('https://jsonplaceholder.typicode.com/posts', { // passing an object of options
//         method: 'post', // post request, from the page, when post, you are posting data to the server,
// // we need to add data to the body
//         body: JSON.stringify({ // variable (post) is an object, we want to JSON.stringify() - string
//             title: post.title,// in stringify I could just pass (post), but this is better because
//             body: post.body // I am being more specific
//         })
//     });
// }

// with destructuring: 
function createPost({title, body}) {
    fetch('https://jsonplaceholder.typicode.com/posts', { 
        method: 'post', 
        body: JSON.stringify({ 
            title,
            body 
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    }).then(res=> res.json())
      .then(data=> console.log(data))
}

createPost({title: 'My Post', body: 'This is my Post'})