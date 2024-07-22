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
output = document.forms[0].method; // get

console.log(output)