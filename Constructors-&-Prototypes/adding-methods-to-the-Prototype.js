/*
Prototype is just a special object where additional methods and properties can be attached
and shared across all instances of its constructive function.

*/

// function Rectangle(name, width, height) {
//     this.name = name;
//     this.width = width;
//     this.height = height;
//     this.area = function () {
//         return this.width * this.height; this area function can be done better
//     }
// }

// const rect = new Rectangle ('Rect', 10, 10);
// console.log(rect)
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

// Adding methods to the Prototype!

function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
        return this.width * this.height; 
    }
/* Rectangle.prototype. name of the function = function () { .....
and because of the prototype, we still have the acces of width, height... using this.}
*/
Rectangle.prototype.perimeter = function () {
    return 2 *(this.width + this.height);
}

Rectangle.prototype.isSquare = function () {
    return this.width === this.height;
}

Rectangle.prototype.changeName = function (newName) {
    return this.name = newName
}


const rect = new Rectangle ('Rect', 10, 10);
console.log(rect)// devTools, when I open it, it doesnt have area(), but its in one level
// deeper, in prototype, when click that I will see area()

const rect2 = new Rectangle ('Rect 2', 30, 40)
console.log(rect.area()) // 100
console.log(rect.perimeter()) // 40
console.log(rect.isSquare()) // true
console.log(rect.changeName('Rect2')) // Rect2

console.log(rect2.area()) // 1200

/*
Any object that I instantiate from this constructive function, I have access to all of these
prototype methods
*/

// These were the examples how to add prototypes to an object, 
// alternate way to do that is with Object create
// Object.create() takes in object of methods or an object of prototypes, and then object of your properties
// then you will be able to use that to create new objects
const rectanglePrototypes = {
    area: function () {
     return this.width * this.height
    },
    perimeter: function () {
        return 2 * (this.width + this.height);
    },
    isSquare: function () {
        return this.height === this.width;
    }
}

function createRectangle(height, width) {
    return Object.create(rectanglePrototypes, {
        height: {
            value: height
        },
        width: {
            value: width
        }
    })
}

const rectan = createRectangle(10, 20);
console.log(rectan) // {height: 10, width: 20}
console.log(rectan.area()) // 200
console.log(rectan.isSquare()) // false

const rectan2 = createRectangle(20, 20);
console.log(rectan2.area()) // 400