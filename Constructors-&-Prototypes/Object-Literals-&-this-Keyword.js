// const rectangle = {} - Object Literal

const rectangle = {
    name: 'Rectangle 1',
    width: 10,
    height: 10,
    area: function() {
        return this.width * this.height;
    }
};

console.log(rectangle.area())

const rectangle2 = {
    name: 'Rectangle 2',
    width: 30,
    height: 20,
    area: function() {
        return this.width * this.height;
    }
};
console.log(rectangle2.area())

/*
 What if I want to make 100 constructors? am I gonna copy and paste 100 rectangles?
 no, thats why Constructor functions come along.
*/
