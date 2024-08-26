const canvas = document.querySelector('#my-canvas');
const ctx = canvas.getContext('2d');

// Draw rectangle
ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100) //x and y and width and height

// Draw circle
ctx.fillStyle = 'red';
ctx.arc(300, 300, 100, 0, Math.PI * 2); // frist two are x and y, where we wanna put it
// then its the radius (100) is a circle, then its a start angle, and then the end angle
ctx.fill();


// Draw lines
ctx.beginPath();
ctx.strokeStyle = 'orange';
ctx.lineWidth = 5;
ctx.moveTo(10, 10); // start point
ctx.lineTo(300, 300); // end point will draw the line
ctx.stroke() // for the line is stroke, not strokeStyle


// Draw text
ctx.font = '30px Arial';
ctx.lineWidth = 1;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'blue'
ctx.fillText('Hello World', 300, 100, 300);
ctx.strokeText('Hello World', 300, 500, 300);


// Draw image
const image = document.querySelector('img');
image.style.display = 'none';

image.addEventListener('load', ()=> {
    ctx.drawImage(image, 250, 250, 100, 100);
})