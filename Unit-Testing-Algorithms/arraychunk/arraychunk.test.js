/* Assertion:
Assertion library that no js includes, so it's a core no JS module called assert, we are using
it with Jest.  So basically we can jsut replace expects with the assert, and an assertion is a 
statement that is either true or false.
If it's false, then the program will throw an error and we can use assert.equal or
assert.deep, assert.deepEqual ...
*/

const assert = require('assert');
const chunk = require('./arraychunk');

describe('Array Chunking', ()=> {
    it('Should create chunks of a specific size', ()=> {
        assert.deepEqual(chunk([1,2,3,4], 2), [[1,2], [3,4]]);
/* inside deepEqual() you want to pass in your function chunk() and that takes in an array,
we are passing 1, 2, 3, 4. chunk() is gonna take in a second argument of the number of elements 
that I want in each chunk, which will be 2.
After the chunk function, we put a comma and the next thing is what we should get, aka
what the output should be equal to: [[1, 2], [3, 4]], an array with the chunks of two.
*/
    })

    it('Should create chunks of a specific size', ()=> {
        assert.deepEqual(chunk([1,2,3,4], 3), [[1,2,3], [4]]); // chunks of 3, if we added
// 5, 6, 7, 5 and 6 will be with 4, and 7 would be in it's separate array.

    })
});