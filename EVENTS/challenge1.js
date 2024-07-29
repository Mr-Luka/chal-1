const key = document.querySelectorAll('.key');
console.log(key[0])


function keybordPress (e) {
    console.log(e.key, e.keyCode, e.code);
    key[0].innerHTML = 
    `${e.key} <small>e.key</small>`
    key[1].innerHTML = 
    `${e.keyCode}<small>e.keyCode</small>`
    key[2].innerHTML = 
    `${e.code}<small>e.code</small>`
    
}

window.addEventListener('keypress', keybordPress)