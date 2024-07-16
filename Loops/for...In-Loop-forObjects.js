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

