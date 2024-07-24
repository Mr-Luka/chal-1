// Shopping List:

// Quick & Dirty
function createListItem(item) {
    const li = document.createElement('li');
    li.innerHTML = `${item}
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;
    document.querySelector('.items').appendChild(li);
}
// Using this inenrHTML makes it re-pass and recreate all the DOM nodes inside the UL element, so that is less efficient


// Clean & Performant
function createNewItem (item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item))
    const button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';
    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);
    li.appendChild(button); 
    document.querySelector('.items').appendChild(li)
    console.log(li.innerHTML) // // <button class="remove-item btn-link text-red"><i class="fa-solid fa-xmark"></i></button>
}

createListItem('Broccoli');
createNewItem('Tomato');


// REFACTOR TO MULTIPLE FUNCTIONS:
/*
1) Separate function for creating a button 
2) Separate function for creating the icon
*/
function createNewItem2(item) {
     const li = document.createElement('li');
     li.appendChild(document.createTextNode(item))
     const button = createButton('remove-item btn-link text-red');

     li.appendChild(button);
     document.querySelector('.items').appendChild(li);
     
}

function createButton (classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);

    return button;
}

function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

createNewItem2('Garlic')