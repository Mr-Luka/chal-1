/*       Removing DOM elements
Like most of the things in the DOM sections we went through, we are usually going to do when we
fire off an event such as a click this delete button X, then we would remove that item from the 
shopping list.
*/

function removeClearButton (){
    document.querySelector('#clear').remove();
    // or:
    // const clearButton = document.querySelector('#clear');
    // clearButton.remove(); 
}
removeClearButton();
