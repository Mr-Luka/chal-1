function Shape(name) {
    this.name = name;
}
/* One of the reasons that you use inheritance is to inherit prototypes.
I want to be able to have a prototype method on shape.
*/
Shape.prototype.logName = function (){
    console.log(`Shape Name: ${this.name}`)
}

function Rectangle(name, height, width) {
    Shape.call(this, name); // call the function Shape, and I have to put .call() method, it will call the function
    // and it will allow us to pass in THIS

    this.height = height;
    this.width = width;
}

// console.log(rect)
// Inherits shape prototypes
Rectangle.prototype = Object.create(Shape.prototype);
/* We are able to use on the rectangle object, which uses the rectangle constructor, which
inherits from the shape and also inherits the prototypes, now we can use log name or any other 
prototype method that we add to shape.
*/
Rectangle.prototype.logName = function (){
    console.log(`Rectangle Name: ${this.name}`)
} // good example of polymorphism where we have same method that does two different things.

Circle.prototype = Object.create(Shape.prototype)

function Circle(name, radius) {
    Shape.call(this, name); 
    
    this.radius = radius;
}

// Set prototype construcots
Rectangle.prototype.constructor = Rectangle;
Circle.prototype.constructor = Circle;

const rect = new Rectangle('Rectangle 1', 20, 20);
const circle = new Circle ('Circle 1', 30);


rect.logName(); // Shape Name: Rectangle 1
circle.logName(); // Shape Name: Circle 1

// This gets little bit messy, and theres a lot more that I have to do compared to
// using classes. When I use classes, If I want to inherit, I just simply say 
// One class extends another, and then automatically all the methods you create
// are available on that subclass. Trav prefers classes