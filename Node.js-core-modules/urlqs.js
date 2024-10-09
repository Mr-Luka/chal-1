const url = require('url');
const querystring = require('querystring')

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


// querystring.parse()
// when we say querystring, meaning something like: ?id=100&premium=true
const myQs = 'year=2023&month=january&day=20'
const q = querystring.parse(myQs);
console.log(q) // { year: '2023', month: 'january', day: 20 }
console.log(q.month) // january

// querystring.stringify()
// we can use strinify to convert an object into a query string
const myQs2 = querystring.stringify({
    year: 2023,
    month: 'january',
    day: 20,
})
console.log(myQs2) // year=2023&month=january&day=20