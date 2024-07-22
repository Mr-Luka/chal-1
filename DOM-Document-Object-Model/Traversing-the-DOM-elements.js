 // Traversing - travel across or through
 /*
Relationships between element Nodes.
Everything in the DOM is a node and there are many types of nodes: text node, comments nodes...
There's certain properties if you want to work with those types of nodes
 */

/* ELEMENT NODES
Any HTML tag on the page is an Element 
*/
let output;
// Get child Elements:
const parent = document.querySelector('.parent'); // <div class='parent'>...</div>
output = parent.children;  // children is not a method, its a property
// HTMLCollection(3) [div.child, div.child, div.child]
// becasue its an array looking structure I can:
output = parent.children[1] //  <div class='child'>Child 2</div>
// if I: console.dir(output) it will show me all the methods I can use on it
output = parent.children[1].innerText; // Child 2
output = parent.children[1].className; // child
output = parent.children[1].nodeName; // DIV

parent.children[1].innerText = 'Child Two';
parent.children[1].style.color = 'Green';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';


console.log(output)
