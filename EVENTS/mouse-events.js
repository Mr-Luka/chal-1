const logo = document.querySelector('img');


const onClick = () => console.log('click event')

const onDoubleClick = () => {
    if (document.body.style.backgroundColor !== 'purple') {
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}
// if i click once, its still gonna fire of: click event, and if i click twice, ill get both


const onRightClick = () => console.log('right click event') // in the console: right click event


const onMouseDown = () => console.log('mouse down event') // when I press and hold the click it will show: mouse down event
// once I relsease the button, it will fire the click event after.


const onMouseUp = () => console.log('mouse up event')


// when I scroll the page, it will fire off mouse wheel event
const onMouseWheel = () => console.log('mouse wheel event');



// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);