let x

const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
}
x = person.name; // John Doe
x = person['age']; // 30
x = person.address.state; // MA
x =person.hobbies[0] // Music
person.name = 'Jane Doe'
x = person.name // Jane Doe
person['isAdmin'] = false; // isAdmin: false
delete person.age;  // deleted age from a person
person.hasChildren = true; // add property

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
}
// person.greet() // Hello my name is Jane Doe
x = person; 
// console.log(x)

// Nested OBJECTS, object spread & Methods
let y;
const todo = {};
todo.id = 1
y = todo;
// OR
const todo2 = new Object();
todo2.id = 1
todo2.name = 'Lala';
todo2.completed = false;
y = todo2 // {id:1, name:'Lala', completed: false};
// --------------
const person2 = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232
        }
    }
}
y = person2.address.coords.lat; // 42.9384
const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {obj1, obj2};  // Gives an object with 2 objects inside obj1 and obj2
y = obj3 
y = {...obj1, ...obj2} // Object with all the keys and properties {a:1, b:2, c:3, d:4}

const todos = [
    {id: 1, name: 'Buy Milk'},
    {id: 2, name: 'Pickup kids from school'},
    {id: 3, name: 'Take out trash'},
];
y = todos // [{id:1...}{}{}]
y = todos[0] // {id:1, name:'Buy Milk'}
y = todos[0].name; // Buy Milk

y = Object.keys(todo2) // It gives me an array with keys ['id', 'name', 'completed']
y = todo2.length; // UNDEFINED
y = Object.keys(todo2).length;  // it will give me 3

y = Object.values(todo2); // it will give me an array with values [1, 'Lala', false]

y = Object.entries(todo2) // It will give me an array of 3 arrays of entries
// ['id', 1]
// ['name', 'Lala']
// ['completed', false]

y = todo2.hasOwnProperty('name'); // gives Boolean: true/ false
// console.log(y)


//  DESTRUCTURING & NAMING

const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person3 = {
    firstName,
    lastName,
    age
}
// console.log(person3.age) // 30

// Destructuring:
const todo3 = {
    id: 1,
    title: 'Take out trash',
    user: {
        name: 'John'
    }
}
//Destructure:
//  const {id, title, user} = todo3; // 1 'Take out trash' {name: 'John}
//  const {id, title, user: {name}} = todo3; // console.log( name ) - John
const {
    id: todoId,
    title,
    user: {name},
} = todo3;
//  console.log(todoId) // 1

// OBJECT CHALLENGE

const library = [
    {
      title: 'CEO', 
      author: 'Luka', 
      status: {
        own: true,
        reading: false,
        read: false,
        }
    },
    {
      title: 'Home', 
      author: 'Anastacia', 
      status: {
        own: true,
        reading: false,
        read: false,
        }
    },
    {
      title: 'Wealth', 
      author: 'Maxia', 
      status: {
        own: true,
        reading: false,
        read: false,
        }
    }
]
// Set the read value for all of them to true, Set the values using dot notation.
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const {
    title: firstBook,
} = library[0];
// console.log(firstBook) // CEO

const libJson = JSON.stringify(library);
console.log(libJson)