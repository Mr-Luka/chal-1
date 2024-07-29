const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)');
const form = document.querySelector('form');


button.addEventListener('click', (e)=> {
    alert('The button was clicked');
    e.stopPropagation()
})

div.addEventListener('click', ()=> {
    alert('Div was clicked')
});

form.addEventListener('click', ()=> {
    alert('Form was clicked')
})

document.body.addEventListener('click', ()=>{
    alert('Body was clicked')
})
/* What is happening here:
When I click next to the button on the page it will fire the alert('Div was clicked'), and that is a parent
element to the button.
When I click the button, it will fire the alert('The button was clicked') and right after that
its gonna fire the parent element as well:  alert('Div was clicked') and its parent element
which is the form. and show: alert('Form was clickeds)
The event listeners are bubbling, and then any of its parents of a button that have a click event listener
its gonna fire that as well.


There will be cases where I dont want bubbling to happen and mess up my application I will use:
.stopPropagation();
and nothing happens after that, no bubbling
*/

