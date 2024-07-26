// working with item input:

const itemInput = document.querySelector('#item-input');

const onKeyPress = e => {
    // hit any key while in the input, and it will fire the event listener
// it fires off that event once for one key press
    console.log('keypress');
}

const onKeyUp = e => {
    console.log('keyup') // it gets fired off once i press and Release the button
}

const onKeyDown = e => {
//     console.log('keydown') // it gets fired off once i press the button, and as long
// as I am holding the button its gonna keep firing the event.

// key
    // console.log(e.key)  -  the moment I type the letter it is showing the letter, 
// not appending it just replacing it, for example:
// document.querySelector('h1').innerText = e.key;  Shopping List - if I type in the input just: l
// the whole shopping list will be replaced with l, just one letter
// if (e.key === 'Enter'){
//     alert('You pressed enter')
// }


// keyCode - its gonna give me an actual number, a key code
// https://www.toptal.com/developers/keycode
// if(e.keyCode === 13) {
//     alert('You pressed enter')
// }



// code
console.log(e.code); // it will give me: for letter F - KeyF
if(e.code === 'Digit1'){
    console.log('You pressed 1')
}


if(e.repeat) {
    console.log('You are holding the key down' + e.key)
// as long as I am pressing and holding the key I pressed it will be true and show it
}

console.log('Shift: ' + e.shiftKey) // when I press and hold Shift and another key/letter
// Shift: true
console.log('Control: ' + e.ctrlKey)
console.log('Alt: ' + e.altKey)

if(e.shiftKey && e.key === 'K'){
    console.log('You hit shift + K')
}

}



// itemInput.addEventListener('keypress', onKeyPress);
// itemInput.addEventListener('keyup', onKeyUp);
itemInput.addEventListener('keydown', onKeyDown);