const logo = document.querySelector('img');

function onClick (e){
    console.log(e.target) // <img src='../DOM-d...' alt=''>
    console.log(e.currentTarget) // <img src='../DOM-d...' alt=''>
    // e.target.style.backgroundColor = 'black'; // the background of logo turns black when clicked
}
// logo.addEventListener("click", onClick)


// Difference between e.target and e.currentTarget:
// document.body.addEventListener('click', function (e){
//     console.log(e.target); // <li class='item'>...</li>
//     console.log(e.currentTarget); // <body style='isolation: isolate;'>...</body>
// Here I am getting two different things, because the Event is put onto the body
// and that's what currentTarget is, it's whatever the event is attached to,
// the Target is whever I clicked and in this case I clicked the <li>, which is in
// the body, so basically what happens is events bubble up. If I click on the list item
// that event bubbles up to the parent which would be the UL and then bubbles up to that parent
// and that parent, all the way up to the body up to the HTML.
// });


function onClick2(e) {
    // console.log(e.type) - it will show: click, because that is the TYPE of a event, click.
    // console.log(e.timeStamp);  -  gives a time stamp
    // console.log(e.clientX);  -  Horizonatal from Right to Left - relative to the window
    // console.log(e.clientY); -  Vertical from Top to Bottom - relative to the window

    // console.log(e.offsetX);  - Horizontal from right to left - relative to where I click within to this element
    // console.log(e.offsetY);  -  Vertical from Top to Bottom - relative to where I click within to this element

    // console.log(e.pageX);   -  The X position of the mouse click relative to the page
    // console.log(e.pageY);   -  The y position of the mouse click relative to the page

    // console.log(e.screenX);  //-  The X position of the mouse click relative to entire monitor
    // console.log(e.screenY);  //-  The X position of the mouse click relative to entire monitor
}


logo.addEventListener('click', onClick2);

/*
- `target` - The element that triggered the event
- `currentTarget` - The element that the event listener is attached to 
(These are the same in this case)
- `type` - The type of event that was triggered
- `timeStamp` - The time that the event was triggered
- `clientX` - The X position of the mouse click relative to the window
- `clientY` - The Y position of the mouse click relative to the window
- `offsetX` - The X position of the mouse click relative to the element
- `offsetY` - The Y position of the mouse click relative to the element
- `pageX` - The X position of the mouse click relative to the page
- `pageY` - The Y position of the mouse click relative to the page
- `screenX` - The X position of the mouse click relative to the screen
- `screenY` - The Y position of the mouse click relative to the screen
*/



// If you are working on forms, u need to use e.preventDefault() it prevents default behaviour

function onDrag(e){
    document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// When I click the logo and drag it, the shopping list will turn into X and Y
// and It will display their numbers wherever i move the logo 
}

logo.addEventListener('drag', onDrag);