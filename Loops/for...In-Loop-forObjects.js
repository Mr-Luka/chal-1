// For in Loop

// Looping throught object values

const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
}

for (let key in colorObj) {
    console.log(key); // Color1 Color2 Col
/*  color1
    color2
    color3
    color4
*/
    console.log(colorObj[key]) // If we want to get the value of the key
/*  red
    blue
    orange
    green
*/
   console.log(key, colorObj[key]); // if we want to get the key and value
/* color1 red
   color2 blue
   color3 orange
   color4 green
*/
}


// Using for in Loop within the array
const colorArr = ['red', 'green', 'blue', 'yellow'];

for (let color in colorArr) {
    console.log(color) // its giving us keys, which in this case they are numberic from 0-3
/*  0
    1
    2
    3
*/
}
// to get the color from the array ( key)
for (let key in colorArr) {
    console.log(colorArr[key]) // getting the key from the array
/*  red
    green
    blue
    yellow
*/
}