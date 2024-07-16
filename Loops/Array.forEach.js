/*
.forEach() method executes a provided function once for each array element.
forEach takes in a function as an argument which is called a callback function, 
and in that callback function we can pass in a variable for each element in that 
array or each item in that array.
what .forEach() does is it just simply Loops throught, it doesn't return anything,
it just loops through the array and executes the callback function for each element in the array.
Like we were using for... or for...Of Loop to just go through the array and 
do something specifi.
*/

const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];
// console.log(socials.__proto__); It will show me what methods I can use for it.

// with only parameter
// socials.forEach(social => {
//     console.log(social);
// /*  Twitter
//     LinkedIn
//     Facebook
//     Instagram 
// */
// })
/*
Right where we pass the function inside .forEach() with parameter, in this case: social
is going to run for every element or every item that we have in the array, so in
this case its gonna run 4 times.

In addition to paramteres in .forEach(),
we have:
1. index: which is the index of the element in the array.
2. array: which is the array itself.
*/


// .forEach() with parameter and index

socials.forEach((social, index)=> {
    console.log(social, index);
/*  Twitter 0
    LinkedIn 1
    Facebook 2
    Instagram 3
*/
})

// .forEach() with parameter, index and entire Array
socials.forEach((social, index, arr)=> {
    console.log(social, index, arr);
/*  
    Twitter 0
(4) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']
    LinkedIn 1
(4) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']
    Facebook 2
(4) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']
    Instagram 3
(4) ['Twitter', 'LinkedIn', 'Facebook', 'Instagram']

*/
})

// You can also pass named Function rather then an anonymous callback
function logSocials(social) {
    console.log(social);
}
socials.forEach(logSocials);
/*  Twitter
    LinkedIn
    Facebook
    Instagram 
*/