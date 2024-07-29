// One way: did it on my own if the divs are still there
// const key = document.querySelectorAll('.key');
// console.log(key[0])


// function keybordPress (e) {
//     console.log(e.key, e.keyCode, e.code);
//     key[0].innerHTML = 
//     `${e.key} <small>e.key</small>`
//     key[1].innerHTML = 
//     `${e.keyCode}<small>e.keyCode</small>`
//     key[2].innerHTML = 
//     `${e.code}<small>e.code</small>`
    
// }
// window.addEventListener('keypress', keybordPress)

// Second way: 
// if the divs are removed, and we are making them here in #insert div

window.addEventListener('keydown', (e)=> {
    const insert = document.querySelector('#insert');

    insert.innerHTML = `
        <div class="key">
        ${e.key === ' ' ? 'Space' : e.key}
        <small>e.key</small>
        </div>

        <div class="key">
        ${e.keyCode}
        <small>e.keyCode</small>
        </div>

        <div class="key">
        ${e.code}
        <small>e.code</small>
        </div>`;
        
})