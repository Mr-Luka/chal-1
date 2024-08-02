/*
.setInterval - will repeatedly call a function or execute a code snipped with a fixed
time delay between each call and we can define what we want that delay to be.

.clearInterval which will stop the interval from running 
*/

// const intervalID = setInterval(myCallback, 1000, 'Hello');
// // passing the function and we are gonna pass in the amount of time we want between
// // the times that myCallback runs

// function myCallback(a){
//     console.log(a, Date.now()) //I can also pass 'Hello in setInterval, and in the callback
// // function I can pass it as a parameter
// }
// its gonna keep runing until we call for clearInterval


let intervalID;

function startChange(){
    if(!intervalID){
        intervalID = setInterval(changeColor, 1000);
    }
}

function changeColor() {
    if(document.body.style.backgroundColor !== 'black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

function stopChange(){
    clearInterval(intervalID); // I had to make a variable intervalID, so that
    // clearInterval can stop it.
}

document.querySelector('#stop').addEventListener('click', stopChange);
document.querySelector('#start').addEventListener('click', startChange);