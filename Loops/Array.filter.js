/*
 array.filter() - is another hight order method
The filter() method creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test
implemented by the provided function. It creates a new array with all elements
that pass the test implemented by the provided function.

The difference between .forEach() and other ones, is that .filter() with bunch of
other hight order methods, it actually returns something.
In most cases they are going to return an array, modified array.

 */

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);
console.log(result); // (3)   ['exuberant', 'destruction', 'present']
/* what is happening here?
we make a variable and pass in words array .firlter() 
inside we pass a function (in this case arrow function), 
we are looping through, we can get each word and then we are testing that word
and seeing if the length is bigger then 6 (word.length > 6).
what that variable: result is gonna return is an array with only the words
that pass this test or only the elements in the array that pass this test.
The result will be: ['exuberant', 'destruction', 'present']
becasue they are greater then 6. And if they are not, they will not be put
in that array.
So we are filtering out the words that dont pass this test.
*/



// Example 2: longer version
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// filtering odd numbers
// const evenNumbers = numbers.filter(number => {
//     return number % 2 === 0;
// })
// console.log(evenNumbers); // (5) [2, 4, 6, 8, 10]

// Example 2: shorter version
const evenNumbers = numbers.filter(number=> number % 2 === 0);
console.log(evenNumbers)

// Trying to do it with .forEach()
const evenNumberss = [];
numbers.forEach(number => {
    if(number % 2 === 0) {
        evenNumberss.push(number)
    }
})
// to iterate using .forEach() and push it onto array
// (5) [2, 4, 6, 8, 10]
// its fine that I used const for the evenNumberss array, becasue we are not
// reassigning anything, we are push()-ing into the array.



// Example 3:
const companies = [
    {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
    {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
    {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
    {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
    {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
    {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
    {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
    {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
    {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
];

// Get only retail companies
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
/*    (3) [{…}, {…}, {…}]
0: category: "Retail", end: 2008, name: "Company Two", start: 1992
1:  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010}
2:  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989}
length: 3

*/


// Get companies that started in or after 1980 and ended in or before 2005
const eightiesCompanies = companies.filter(company =>
    company.start >= 1980 && company.end <= 2005
);
console.log(eightiesCompanies);
/*    (3) [{…}, {…}, {…}]
0:  {name: 'Company One', category: 'Finance', start: 1981, end: 2004}
1:  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996}
2:  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
length: 3
*/

// Get companies that lasted 10 years or more:
const tenOrMore = companies.filter(company=> 
    company.end - company.start >= 10
);
console.log(tenOrMore);
/*    (3) [{…}, {…}, {…}]
0:  {name: 'Company One', category: 'Finance', start: 1981, end: 2004},
1:  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
2:  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
3:  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
4:  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
length: 5
*/