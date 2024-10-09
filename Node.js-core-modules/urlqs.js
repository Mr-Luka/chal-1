const url = require('url');

// to console.log it in terminal: node urlqs



// url.parse() 
// this will get us pretty much anything from the url
const myUrl = url.parse('https://example.com/listing?id=1000&premium=true');
console.log(myUrl);
/*
Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'example.com',
  port: null,
  hostname: 'example.com',
  hash: null,
  search: '?id=1000&premium=true',
  query: 'id=1000&premium=true',
  pathname: '/listing',
  path: '/listing?id=1000&premium=true',
  href: 'https://example.com/listing?id=1000&premium=true'
}
*/


// url.format()
// method which takes an object and returns the URL string, so it's almost reverse of .parse()
// I am basically creating this URL using this object
const myUrl2 = url.format({
    protocol: 'https',
    hostname: 'www.example.com',
    pathname: '/listing',
    query: {
        id: 100,
        premium: true,
    }
});
console.log(myUrl2) // https://www.example.com/listing?id=100&premium=true

