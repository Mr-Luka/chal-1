// Selecting a single element on a page

// document.getElementById()
console.log(document.getElementById('app-title')); // <h1 id='app-title'>Shopping List</h1>
console.log(document.getElementById('app-title').id); // app-title

console.log(document.getElementById('app-title').getAttribute('id')); // app-title

// Set Attributes
document.getElementById('app-title').title = 'Shopping List';
document.getElementById('app-title').setAttribute('class', 'title');

const title = document.getElementById('app-title');
console.log(title) // <h1 id='app-title' title='Shopping List' class='title'>Shopping List</h1>


// Get/ change content
console.log(title.textContent) // Shopping List
// title.textContent = 'Hello World'
// title.innerText= 'Hello Again'
title.innerHTML = '<strong>ShoppingList</strong>'

// Change styles
title.style.color = 'red';
title.style.backgroundColor = 'blue';
title.style.padding = '10px';
title.style.borderRadius = '10px';


// document.querySelector()
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"]'));
console.log(document.querySelector('li:nth-child(2)').innerText); // Orange Juice

const secondItem = document.querySelector('li:nth-child(2)');
secondItem.innerTet = 'Apple Juice';
secondItem.style.color = 'red';


