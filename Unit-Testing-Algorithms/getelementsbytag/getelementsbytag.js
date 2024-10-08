/*
<div>
    <p>eded</p>
    <p>eded</p> - these are child nodes inside that div
    <ul>eded</ul>
    <p>ded</p>
</div>

 What I want to do is be able to pass in the route, which would be this div and then
    get an array of all the pragraphs, if that's what I pass in as a tag name.
*/

function getElementsByTag (root, tagName) {
    if (!root) return [];
    if(!tagName) return [root];

    let result = [];

    // If result is a tag we are looking for
    if (root.tagName.toLowerCase() === tagName.toLowerCase()) {
        result.push(root);
    }

    // Checking if the root has child nodes
    if(root.hasChildNodes()) {
        for(let child of root.children) {
            result = result.concat(getElementsByTag(child, tagName));
        }
    }

    return result;
}

module.exports = getElementsByTag;