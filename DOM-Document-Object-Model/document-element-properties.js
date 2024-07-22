let output;

output = document.all;
output = document.all[11];
output = document.all.length; // 24
output = document.documentElement; // html

output = document.head; //head
output = document.body; //body

output = document.head.children; // HTMLCollection(6) [meta, meta, meta, link, link, title..]
output = document.body.children; // HTMLCollection(2) [div.container, script] // everythings thats in the body

output = document.doctype; 
output = document.domain; // 127.0.0.1
output = document.URL; // http://127.0.0.1:5500/JS
output = document.characterSet; // utf-8
output = document.contentType; // text/html

output = document.forms; // HTMLCollection [form#item-form, item-form: form#item-form]
output = document.forms[0]; // form#item-form
output = document.forms[0].id; // item-form
output = document.forms[0].method; // get - its always gonna be get since its method
output = document.forms[0].action; // http://127.0.0.1:

// document.forms[0].id = 'new-id'; //I set the new-id to the form, before it was a different id

output = document.links; // HTMLCollection []
output = document.links[0]; // a#item-link
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images; // HTMLCollection[img]
output = document.images[0]; // img#item-image
output = document.images[0].src; // https://via.placeholder.com/150

// document.forms.forEach(form=> console.log(form)) //It will say that document.forms.forEach is not a function
// and it is not a function because what we have here is an HTML collection, the only way I can do it is to 
// turn it into an array:
const forms = Array.from(document.forms);
forms.forEach(form=> console.log(form)); // <form id='item-form'>...</form>

 

console.log(output)