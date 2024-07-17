/*
The .map() method creates a new array populates with the results of calling a provided function
on every element in the calling array.
*/
// Example 1:
const array1 = [1, 4, 9, 16];
// Pass a function to map, using x but it can be anything
const map1 = array1.map(x => x * 2);
console.log(map1) //2, 8, 18, 32]


// // Example2 :
const numbers2 = [1, 2, 3, 4, 5];
const doubledNumbers2 = numbers2.map(number=> `Number ` + number)
//  If i were to use {} i would need to use Return keyword
// has to be numbers2, or it will be an error i think
console.log(doubledNumbers2) //  ['Number 1', 'Number 2', 'Number 3', 'Number 4', 'Number 5']

// Same with .forEach()
const doubleNumbers3 = [];
numbers2.forEach(number=> {
    doubleNumbers3.push(number * 2);
})
console.log(doubleNumbers3); // [2, 4, 6, 8, 10]



// Example 3:
const companies2 = [
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

// Create an array of company names
const companyNames2 = companies2.map(company=> company.name);
console.log(companyNames2);
// ['Company One', 'Company Two', 'Company Three', 'Company Four', 'Company Five', 'Company Six', 'Company Seven', 'Company Eight', 'Company Nine']


// Create an array with just company and category as objects
const companyCategory = companies2.map(company => {
    return {
        name: company.name,
        category: company.category,
    }
})
console.log(companyCategory);

// (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {name: 'Company One', category: 'Finance'}
// 1: {name: 'Company Two', category: 'Retail'} ....



// Create an array of objects with the name and the length of each company in years
const companyYears = companies2.map(company => {
    return {
        name: company.name,
        years: company.end - company.start,
    }
})
console.log(companyYears);
/*
(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
0: {name: 'Company One', years: 23}
1: {name: 'Company Two', years: 16}
2: {name: 'Company Three', years: 8} ...
*/