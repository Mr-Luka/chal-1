// function toggle(e){
//     e.target.classList.toggle('danger');
// }
// /* that toggle function is a callback function
// Its a function that gets passed into another function.
// */
// document.querySelector('button').addEventListener("click", toggle);


const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'},
];


function createPost(post, cb) {
    setTimeout (()=> {
        posts.push(post);
        cb();
    }, 2000)
}

function getPosts(){
    setTimeout(()=> {
        posts.forEach((post)=>{
            const div = document.createElement('div');
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        })
    }, 1000);
}

createPost({title: 'Post Three' , body: 'This is post three'}, getPosts)
/*
The reason why we did it this way, is because the Post Three wouldnt show becasue it takes
much longer to pull, so it will only show the Post one and post two.
When I put callback function inside the createPost, it will show all three,
so all together waits for like 3 seconds
*/