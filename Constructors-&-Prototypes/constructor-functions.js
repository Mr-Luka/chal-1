/*
When you want to have multiple instances of the same object, that's where you can run into
some issues with object literals.
You just don't have that capability to create basically a blueprint.
That's where constructive functions come in.
You also have classes, but underneath classes are still constructor functions and prototypes.
*/

const now = new Date();  // Date is a constructor
/*
Whenever you see the word NEW, we are basically initalizing a constructor function.
Now what we want to do is be able to say New Rectangle, or new SHape, new User, whatever
the object that we want to create.
*/

function Rectangle(name, width, height) { // Whenever you create a constructor function, you want to have that first letter uppercase.
/* Usually you will want some properties that you set, so you can set them by passing them in.
Which means we of course have to have some parameters (name, width, height.... etc).
*/
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function (){
        return this.height * width
    }
} // This is pretty much the blueprint, so now I can create as much as I want.

const rect1 = new Rectangle('Rectangle 1', 10, 10); // if I didnt use New, it will be undefined
// console.log: Rectangle {name: 'Rectangle 1', width: 10, height: 10}
/* When we use the NEW keyword, theres actually 4 things that happen:

1) A new empty object is created.
2) The constructor function is called with the arguments that we passed in.
3) The 'this' keyword is set to the new empty object.
4) The new object is returned from the constructor function.
*/

console.log(rect1.name);
console.log(rect1.area())

const rect2 = new Rectangle ('Rectangle 2', 20, 10);
const rect3 = new Rectangle ('Rectangle 3', 30, 30);
console.log(rect2.name, rect3.name);
console.log(rect2.area(), rect3.area())