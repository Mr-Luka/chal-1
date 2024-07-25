// .replaceWith()
// .replace()
function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');
    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();



// 
function replaceSecondItem() {
    const secondItem = document.querySelector('li:nth-child(2)');
    secondItem.outerHTML = '<li>Replaced Second</li>';
}
replaceSecondItem();



// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');
//     lis.forEach((li, index)=> {
//         // li.outerHTML = '<li>Replace All</li>';
//         if (index === 2) {
//             li.innerHTML = 'Second Item'
//         } else {
//             li.innerHTML = 'Replace All'
//         }
//     })
// }
// replaceAllItems();

//Shorter:
// function replaceAllItems() {
//     const lis = document.querySelectorAll('li');
//     lis.forEach((item, index)=> 
//         index === 2 ? item.innerHTML = 'Second Item' 
//         : item.innerHTML = 'Replace All' )
// }
// replaceAllItems();


// Or even SHORTER
function replaceAllItems() {
    const lis = document.querySelectorAll('li');
    lis.forEach((item, index)=> item.innerHTML = index === 1 ? 'Second Item' : 'Item');
};
replaceAllItems();


// .replace()
/*
In the HTML in the header, theres h1, that says Shopping List, lets say I want to replace that with 
h2, so the way this works is we select the parent which is the header, we select the item we want to 
replace and then we replace it with a new item
*/
function replaceChildHeading() {
    const header = document.querySelector('header');
    const h1 = header.querySelector('h1');

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping List';
    header.replaceChild(h2, h1);
}
replaceChildHeading();