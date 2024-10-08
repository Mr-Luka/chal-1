/* Array chunking is basically breaking an array down into smaller arrays.
*/

const chunk = (array, size) => {
    const chunked = [];

    for (let element of array) {
        const last = chunked[chunked.length - 1] // it will give us the last element of the chunked array
    
        if(!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element);
        }
    }

    return chunked;
}

module.exports = chunk;