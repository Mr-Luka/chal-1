let output;

const parent = document.querySelector('.parent');
output = parent.childNodes; /* NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]
What I get here is a Node list.
What I get back is not an HTML collection but a node list and that node list includes all different types of nodes,
so we have a text node, a comment, text, div...
0: text - 
1: comment
2: text
3: div.child
4: text
5: div.child
6: text
7: div.child
8: text
length: 9
*/

console.log(output)