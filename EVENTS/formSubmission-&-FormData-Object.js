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

function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form); // formData {}
    // const item = formData.get('item'); // this Item, is actually the name: 'item'. in the <input> in HTML
    // const priority = formData.get('priority');
    // console.log(item, priority) // garlic 1

    const entries = formData.entries(); // FormData Iterator {}
    // console.log(entries)
    for (let entrie of entries) {
        // console.log(entrie) - it gives me an array of both the name and the priority:
        // (2) ['item', 'garlic]
        // (2) ['priority', '1']
        console.log(entrie[1]);
        // garlic
        // 1
    }
}

form.addEventListener('submit', onSubmit2);