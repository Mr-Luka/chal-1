/*
function Rectangle(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
}

Rectangle.prototype.area = function () {
        return this.width * this.height; 
    }

Rectangle.prototype.perimeter = function () {
    return 2 *(this.width + this.height);
}

Rectangle.prototype.isSquare = function () {
    return this.width === this.height;
}

Rectangle.prototype.logArea = function () {
    console.log(`Rectangle Area: ` + this.area());
}


const square = new Rectangle ('Square', 20, 20);
*/

// Recreating this with classes:

class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() { // when we use the class method, we dont put function in front of area()
        return this.height * this.width;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

    isSquare() {
        return this.width === this.height;
    }

    logArea() {
        console.log(`Rectangle Area: ` + this.area())
    }
}
/* In addition to using this. keyword to access other properties, I can use it to also
access other methods: square.logArea()
A lot of times I will using methods that are internal to the class, that you dont need the
user of the class to know about.
A lot of times your class will have methods that user doesnt need to know about.
*/

const square = new Rectangle('Square', 20, 20);

console.log(square.area()) // 400
console.log(square.perimeter()) // 80
console.log(square.isSquare()) // true
square.logArea() // Rectangle Area: 400
// console.log(square);
// console.log(Object.getPrototypeOf(square)) // {area:}


/*
A constructor is a special function that creates and initializes an object instance of a class. 
In JavaScript, a constructor gets called when an object is created using the new keyword. 
The purpose of a constructor is to create a new object and set values for any existing object 
properties.

Purpose: The constructor is called automatically when you create a new instance of the class using 
the new keyword.
Naming: It must be named constructor.
Functionality: Inside the constructor, you can:
Set initial values for the object's properties.
Perform any necessary setup or initialization logic.
Access the object being created using the this keyword.
*/