const itemInput = document.querySelector('#item-input');
const priorityInput = document.querySelector('#priority-input');
const checkbox = document.querySelector('#checkbox');
const heading = document.querySelector('h1');


function onInput (e){
    heading.textContent = e.target.value;
}

function onChecked(e) {
    console.log(e.target.checked); // true or false
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'Checked' : 'Not Checked'
}

function onFocus(e){
    console.log('Input is focused') // usually i would use this for styling for example
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '3px'
    itemInput.style.outlineColor = 'red'

}

function onBlur(e){
    console.log('Input is not focused');
        itemInput.style.outlineStyle = 'none'

}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput); // so event when I use select priority, it will 
//be seen in e.target.value
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus); // clicking inside will activate it, its on focus
itemInput.addEventListener('blur', onBlur); // clicking outside will lose focus and activate it