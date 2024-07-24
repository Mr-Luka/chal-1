// ELEMENT
// insertAdjacentElement Example
function insertElement() {
    const filter = document.querySelector('.filter');
    const h1 = document.createElement('h1');
    h1.textContent = 'insertAdjacentElement';

    filter.insertAdjacentElement('beforebegin', h1);
    // it takes two parameters, first one where I want it, and second what element
}

// TEXT 
//insertAdjacentText Example
function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend', 'insertAdjacentText');
    // i choose where to put it, and what text I want to put
}

// HTML
// insertAdjacentHTML Example
function insertHTML() {
    const clearBtn = document.querySelector('#clear');

    clearBtn.insertAdjacentHTML('afterend', '<h2>insertAdjacentHTML</h2>');
}



// insertBefore Example
function insertBefore() {
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3');

    ul.insertBefore(li, thirdItem);
}




insertElement();
insertText();
insertHTML();
insertBefore();
/*
<!-- beforebegin -->
<p>
  <!-- afterbegin -->
  foo
  <!-- beforeend -->
</p>
<!-- afterend -->
*/