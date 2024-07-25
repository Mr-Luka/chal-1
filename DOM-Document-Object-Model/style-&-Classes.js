// Working with styles and classes

const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = document.querySelectorAll('li');

function run() {
    // className
    // console.log(itemList.className);  // gives me all the classes in itemList
    // text.className = 'card dark'; // dont put just dark, but also the original class as well so it doesnt get deleted

    // classList
    console.log(itemList.classList) // DOMTokenList(2) ['item-list', 'items', value: 'item-list items']
    // with this, i can loop them, cus its an array
    itemList.classList.forEach( c => console.log(c)); // item-list items

    // text.classList.add('dark');
    // text.classList.remove('card')

    // toggle class
    text.classList.toggle('dark'); // every time i click the button it 
    // toggles the dark and light class

    // replace()
    text.classList.replace('card', 'dark');

    //change style
    // itemList.style.lineHeight = '3';

    items.forEach((item, index)=> {
        item.style.color = 'red';
        if (index === 2) {
            item.style.color = 'blue';
        }
    })
}

document.querySelector('button').onclick = run;