window.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('h1').textContent = 'Hello World'
})
// DOMContentLoaded runs as soon as the DOM is parsed and loaded

window.addEventListener('resize', ()=> {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`
})


//Its gonna change the color as I scroll
window.addEventListener('scroll', ()=>{
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`);
    if(window.scrollY > 70) {
        document.body.style.backgroundColor = 'Black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
})

window.addEventListener('focus', ()=> {
    document.querySelectorAll('p').forEach(p=> {
        p.style.color = 'blue';
    })
})

window.addEventListener('blur', ()=> {
    document.querySelectorAll('p').forEach(p=> {
        p.style.color = 'black';
    })
})