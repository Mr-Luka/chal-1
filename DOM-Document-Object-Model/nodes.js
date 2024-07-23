let output;

const parent = document.querySelector('.parent');
output = parent.childNodes; /* NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]
What I get here is a Node list.
What I get back is not an HTML collection but a node list and that node list includes all different types of nodes,
so we have a text node, a comment, text, div...
0: text - since the index 0 is <div class='parent'> this white space after is considered text, on the next line is comment, 
if I were to delete next line space and put the comment on the same line as 0 text, the lenght will be  instead of 9 and
the first index 0 will be comment, not text
1: comment - comment that I have
2: text - this text is that white space again after the comnent
3: div.child - this is the first div child with a class of child 
4: text - text that says: Child 1
5: div.child
6: text
7: div.child
8: text
length: 9
*/
output = parent.childNodes[0]; // #text - gives us all the things we can do with it 
output = parent.childNodes[0].textContent; // nothing appears
output = parent.childNodes[0].nodeName; // #text
output = parent.childNodes[3].nodeName; // DIV
output = parent.childNodes[3].textContent; // Child 1
output = parent.childNodes[3].outerHTML; // <div class='child'><strong>Child 1</strong></div>

output = parent.childNodes[3].innerText = 'Child One'; // Child One
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild; // #text
output = parent.lastChild;// #text
parent.lastChild.textContent = 'Hello'


// Parent Node
const child = document.querySelector('.child');
output = child.parentNode; // <div class='parent'>...</div>
output = child.parentElement; // <div class='parent'>...</div>

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';
console.log(output)