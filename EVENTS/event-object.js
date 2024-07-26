const logo = document.querySelector('img');

function onClick (e){
    console.log(e.target) // <img src='../DOM-d...' alt=''>
    console.log(e.currentTarget) // <img src='../DOM-d...' alt=''>
    // e.target.style.backgroundColor = 'black'; // the background of logo turns black when clicked
}
logo.addEventListener("click", onClick)


// Difference between e.target and e.currentTarget:
document.body.addEventListener('click', function (e){
    console.log(e.target); // <li class='item'>...</li>
    console.log(e.currentTarget); // <body style='isolation: isolate;'>...</body>
// Here I am getting two different things, because the Event is put onto the body
// and that's what currentTarget is, it's whatever the event is attached to,
// the Target is whever I clicked and in this case I clicked the <li>, which is in
// the body, so basically what happens is events bubble up. If I click on the list item
// that event bubbles up to the parent which would be the UL and then bubbles up to that parent
// and that parent, all the way up to the body up to the HTML.
})

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