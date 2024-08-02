// setTimeout(function(){
//     console.log('Hello from callback')
// }, 0);

// console.log('Hello from global scope');
// Its still gonna run the second one first, and first one second, becasuse it was set on a timeout,
// so its put on a side.



// setTimeout(changeText, 2000)

function changeText(){
    document.querySelector('h1').textContent = 'Hello from callback';
}
const timerId = setTimeout(changeText, 3000);

document.querySelector('#cancel').addEventListener('click', ()=> {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('Timer Cancelled')
})