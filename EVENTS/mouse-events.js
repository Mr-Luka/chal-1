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


// when I move with my mouse over it, it will activate the mouse over event
const onMouseOver = () => console.log('mouse over event');


// When I move with my mouse on top of the logo, and out of it, thats when its gonna be
// activated
const onMouseOut = () => console.log('mouse out event');

// when I come to the logo, so when I click it and hold and try to move it,
// it will trigger drag start event
const onDragStart = () => console.log('drag start event')

// when I click the logo its gonna fire drag event, and as long as I am holding the click, 
// weather I move or not, its gonna keep firing the event, the faster I move, the faster
// it will fire the event
const onDrag = () => console.log('drag event')


// When I click and hold the icon, the moment I reliease it will trigger onDragEnd event
const onDragEnd = () => console.log('drag end event')


// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);

logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);

logo.addEventListener('dragstart', onDragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', onDragEnd);
