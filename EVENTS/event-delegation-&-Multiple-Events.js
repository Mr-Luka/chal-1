/*
What if there are multiple elements, like list items from a shopping list and If I want to delete
them, we have multiple delete buttons where we would want to add an Event Listener to,
This is where Event Delegation comes into play.
which is a powerful event handling pattern.
*/

const listItems = document.querySelectorAll('li');

listItems.forEach(item=> {
    item.addEventListener('click', (e)=> {
        e.target.remove(); // this way is not that good, because it will remove anything we click
// inside the list item as well
/* Instead we can use event delegation to basically add just a single event listener onto the parent
element, and then target whichever one we want to delete
*/
    })
})