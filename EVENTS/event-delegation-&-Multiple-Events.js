/*
What if there are multiple elements, like list items from a shopping list and If I want to delete
them, we have multiple delete buttons where we would want to add an Event Listener to,
This is where Event Delegation comes into play.
which is a powerful event handling pattern.
*/

const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul'); // selecting the parent element

// listItems.forEach(item=> {
//     item.addEventListener('click', (e)=> {
//         e.target.remove(); // this way is not that good, because it will remove anything we click
// // inside the list item as well
// })

/* Instead we can use event delegation to basically add just a single event listener onto the parent
element, and then target whichever one we want to delete
*/

list.addEventListener('click', (e)=> {
    if(e.target.tagName === 'LI') {
        e.target.remove();
    }
})
/* Instead of adding event listeners on each item, I am going to a parent element UL, and 
then testing whatever it is I am clicking on and then deliting that
*/

list.addEventListener('mouseover', (e)=> {
    if(e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
})