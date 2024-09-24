function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

// Object.defineProperty takes in: object itself( this ), it takes in the property that we
// want to add a getter and a setter for which in this case we named it: firstName
// and it takes an Object with a getter and a setter function
    Object.defineProperty(this, 'firstName', {
        get: function(){
            return this._firstName;
        },
        set: function(value) {
            this._firstName = value
        }
    });

    Object.defineProperty(this, 'lastName', {
    get: function(){
        return this._lastName;
    },
    set: function(value) {
        this._lastName = value
    }
    });
}

Person.prototype.capitalizeFirst = function (value) { // capitalizing first letter
    return value.charAt(0).toUpperCase() + value.slice(1);
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName) // firstName, without _, is becasue we defined it in Object.defineProperty()
console.log(person1.lastName)