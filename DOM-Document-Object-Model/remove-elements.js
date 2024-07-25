/*       Removing DOM elements
Like most of the things in the DOM sections we went through, we are usually going to do when we
fire off an event such as a click this delete button X, then we would remove that item from the 
shopping list.
*/
// remove()
function removeClearButton (){
    document.querySelector('#clear').remove();
    // or:
    // const clearButton = document.querySelector('#clear');
    // clearButton.remove(); 
}
removeClearButton();



//  removeChild()
function removeFirstItem() {
// since we are removing the child, we want to select the parent first which is: ul
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}
removeFirstItem();