// shopping list html

// Create an element and then append it
 const div = document.createElement('div');
 div.className = 'my-element';
 div.id = 'my-element';
 div.setAttribute('title', 'My Element') // <div class='my-element' id='my-element' title='My Element'></div>

//  div.innerText = 'Hello World'; // not the best way to use it to insert text. InnerText is really meant to get and change the text
 // of an already existing text element, it's better to create a new text node method and then append it to the element.

 const text = document.createTextNode('Hello World'); 
 div.appendChild(text); // <div class='my-element' id='my-element' title='My Element'> Hello World </div>
 
//  document.body.appendChild(div);  It will put it on the page, in a body section on the bottom of the page
document.querySelector('ul').appendChild(div); // Now its appended inside the UL, on the bottom of it
 console.log(div)