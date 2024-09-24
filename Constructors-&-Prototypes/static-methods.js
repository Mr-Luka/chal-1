class Rectangle {
    constructor(name, width, height) {
        this.name = name;
        this.width = width;
        this.height = height;
    }

    area() {
        return this.height * this.width
    }

    static getClass () { // we make it static when its a static data
        return 'Rectangle';
    }
}

const rect = new Rectangle ('Rect', 10, 10);
console.log(rect.area());
console.log(Rectangle.getClass()); // instance of the class and getClass