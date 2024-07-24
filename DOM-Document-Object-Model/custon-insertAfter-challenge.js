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
console.log(firstItem)

function insertAfter1(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);

}
insertAfter1(li, firstItem);


/*
taking the parent element / aka. existing element, .parentElement and add .insertBefore() -
.insertBefore() gets called on the parent and then what it takes in is the new element that
you want to insert and then whatever you want to put it for, we want to put it after,
and when we put existingEl ( it will be put before apples), and the only thing we need to do is
just put .nextSibling, then it will just got after Apples
*/

