/*
http module is a module that allows us to basically create a server and listen for gttp requests.
You can create a complete web server with this module, however it's not really recommended.
http module is very low level and doesnt provide many features that are needed in a production 
environment. So for example it doesn't handle routing or sessions or static files to 
create a production ready web server you wouold use a framework like express,
*/
const http = require('http');
const fs = require('fs')

const posts = [
    { id: 1, title: 'Post 1', body: 'This is Post 1' },
    { id: 2, title: 'Post 2', body: 'This is Post 2' },
]

const server = http.createServer((request, response)=> { // .createServer() method
//     response.end('Hello World') // .end() it will send the response and if I want to send something with it
// // I can put 'Hello world'
const url = request.url;
if(url === '/') {
    fs.readFile('index.html', (error, file)=>{
        if(error) {
            response.writeHead(500, { 'content-type': 'text/html'});
            response.end('<h1>Sorry we have a problem</h1>')
        } else {
            response.writeHead(200, { 'content-type': 'text/html'});
            response.end(file)
        }
    })
    } else if (url === '/api.posts') {
        response.writeHead(200, { 'content-type': 'application/json'});
        response.end(JSON.stringify({success: true, data: posts}))
        
    } else {
        response.writeHead(404, { 'content-type': 'text/html'});
        response.end('<h1>Page not found</h1>')
    }   
});

server.listen(5000, ()=> {
    console.log('Server is running on port 5000')
});
// node http to run it