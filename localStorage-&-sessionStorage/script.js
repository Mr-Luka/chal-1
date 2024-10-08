const itemForm = document.querySelector('#item-form');
const itemInput = document.querySelector('#item-input');
const itemList = document.querySelector('#item-list');
const clearButton = document.querySelector('#clear');
const itemFilter = document.querySelector('#filter')


function addItem(e){
    e.preventDefault();
    const newItem = itemInput.value;
    if(newItem === ''){
        alert('Please add an item');
        return;
    } 

    const li = document.createElement('li');
    li.appendChild(document.createTextNode(newItem));
    
    const button = createButton('remove-item btn-link text-red');
    li.appendChild(button)

    itemList.appendChild(li);

    checkUI();

    itemInput.value = '';
}

function createButton (classes){
    const button = document.createElement('button');
    button.className = classes;
    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button;
}

function createIcon (classes){
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}

function removeItem(e){
    if(e.target.parentElement.classList.contains('remove-item')){ 
        if (confirm('Are you sure?')){
            e.target.parentElement.parentElement.remove() 
        checkUI()
        }
    }
}

function clearItems (){
    while(itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
    checkUI();
}

function filterItems(e){
    const items = itemList.querySelectorAll('li');
    const text = e.target.value.toLowerCase();
    items.forEach(item=> {
        const itemName = item.firstChild.textContent.toLowerCase(); 
        
        if(itemName.indexOf(text) != -1){ 
          item.style.display = 'flex';
        } else {
            item.style.display = 'none'
        }
    });
}

function checkUI(){
const items = itemList.querySelectorAll('li');

    if(items.length === 0) {
        clearButton.style.display = 'none';
        itemFilter.style.display = 'none'
    } else {
        clearButton.style.display = 'block';
        itemFilter.style.display = 'block';
    }
}

itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems)

checkUI()

localStorage.setItem('name', 'Brad');
// not the console but: application, and under Storage, local storage, 
// I will see key: name, Value: Brad
console.log(localStorage.getItem('name')) // Brad
// localStorage.removeItem('name')
localStorage.clear()