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
person.greet()

x = person; 


console.log(x)