const form = document.querySelector('#item-form');


function onSubmit(e) {
    e.preventDefault();


    const item = document.querySelector('#item-input').value;
    const priority = document.querySelector('#priority-input').value;

    if(item === '' || priority === '0'){
        alert('Please fill in all fields');
        return;
    }
    console.log(item, priority)
}

form.addEventListener('submit', onSubmit);