/*
Prototype is just a special object where additional methods and properties can be attached
and shared across all instances of its constructive function.

*/

function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    }
}

const rect = new Rectangle ('Rect', 10, 10);
console.log(rect)
/*
Rectangle {name: 'Rect', width: 10, height: 10, area: ƒ}
area: ƒ ()
height: 10
name: "Rect"
width: 10
[[Prototype]]: Object
constructor: ƒ Rectangle(name, width, height)
[[Prototype]]: Object
*/