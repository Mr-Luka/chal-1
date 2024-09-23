function Rectangle (name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
    this.area = function () {
        return this.width * this.height;
    };
};

const rect1 = new Rectangle('Rectangle 1', 20, 20);
const rect2 = new Rectangle('Rectangle 2', 20, 30);

console.log(rect1.name, rect2.width) // Rectangle 1 30
console.log(rect1['width']) // 20

// Add property
rect1.color = 'red'; // adding a property
rect2.perimeter = ()=> 2 * (rect2.width + rect2.height) // adding a function

// Delete property
delete rect2.perimeter;  // delete a function/property

// Check for property
console.log(rect2.hasOwnProperty('color')); // false
console.log(rect1.hasOwnProperty('color')); // true

// Get keys
console.log(Object.keys(rect1)); // ['name', 'width', 'height', 'area', 'color']

// Get values
console.log(Object.values(rect2)) // ['Rectangle 2', 20, 30]

// Get entries
console.log(Object.entries(rect1)) // [Array(2), Array(2), Array(2), Array(2), Array(2)]
// each array has a key and a value

for (let [key, value] of Object.entries(rect1)){
    if(typeof value !== 'function'){
    console.log(`${key} - ${value}`) 
    }
}
// name - Rectangle 1
// width - 20
// height - 20
// color - red


 