// .replaceWith()
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
function replaceAllItems() {
    const lis = document.querySelectorAll('li');
    lis.forEach((item, index)=> 
        index === 2 ? item.innerHTML = 'Second Item' 
        : item.innerHTML = 'Replace All' )
}
replaceAllItems();