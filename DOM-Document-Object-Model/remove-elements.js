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
// removeFirstItem(); // it removed first listed item: Apples



// remove child based on index number
function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
// removeItem(2);


// instead of li:nth-child(${itemNumber}), we can do [itemNumber - 1]
function removeItem2(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1]; // index number

    ul.removeChild(li)
}
// removeItem2(1);


// querySelectorAll
function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}
// removeItem3(2);


// shorter version
const removeItem4 = itemNumber => document.querySelectorAll('li')[itemNumber - 1].remove();
removeItem4(2);