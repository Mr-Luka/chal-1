// Parent class
class Shape {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log('Shape Name: ' + this.name)
    }
}

// Sub class
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name); // what this does, is calls the constructor of the parent class
// super() is gonna call constructor(name) this.name=name; from above

        this.height = height;
        this.width = width;
    }
}

class Circle extends Shape {
    constructor(name, radius) {
        super(name); 

        this.radius = radius;
    }
    logName(){
        console.log('Circle Name: ' + this.name)
    }
}

const rect = new Rectangle('Rect 1', 20, 20);
console.log(rect)// Rectangle {name: 'Rect 1', height: 20, width: 20}
rect.logName(); // Shape Name: Rect 1

const cir = new Circle('Cir 1', 30);
cir.logName(); // Circle Name: Cir 1

console.log(rect instanceof Rectangle) // true
console.log(rect instanceof Shape) // true