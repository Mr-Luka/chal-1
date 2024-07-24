/*
Since there is a insertBefore() method, there is not insertAfter(),
in this challenge you need to create a custom insertAfter() function, 

- The first param will be newEl, which will be a new element that you create.
- The second param will be existingEl which is an element in the dom that
you want to insert your new element after

*/
const li = document.createElement('li');
li.textContent = 'Insert me After';
const firstItem = document.querySelector('li:first-child');

function insertAfter(newEl, existingEl) {
    existingEl.insertAdjacentElement('afterbegin', newEl);
}

insertAfter(li, firstItem)