// One way: 
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

// window.addEventListener('keydown', (e)=> {
//     const insert = document.querySelector('#insert');

//     insert.innerHTML = `
//         <div class="key">
//         ${e.key === ' ' ? 'Space' : e.key}
//         <small>e.key</small>
//         </div>

//         <div class="key">
//         ${e.keyCode}
//         <small>e.keyCode</small>
//         </div>

//         <div class="key">
//         ${e.code}
//         <small>e.code</small>
//         </div>`;
        
// })




// Third way: we are building it from scratch, instead of just inserting in, and this way
// is 'better'.
function showKeyCodes(e) {
    const insert = document.querySelector('#insert');
    insert.innerHTML = '';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'Space' : e.key,
        'e.keyCode': e.keyCode,
        'e.code': e.code
    }
    for(let key in keyCodes) {
        const div = document.createElement('div');
        div.className = 'key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small);
        insert.appendChild(div);
    }
}

window.addEventListener('keydown', showKeyCodes);