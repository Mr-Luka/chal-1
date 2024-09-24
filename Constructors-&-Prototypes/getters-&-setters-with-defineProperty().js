// Constructor function
function Person(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;

// Object.defineProperty takes in: object itself( this ), it takes in the property that we
// want to add a getter and a setter for which in this case we named it: firstName
// and it takes an Object with a getter and a setter function
    Object.defineProperty(this, 'firstName', {
        get: function(){
            return this.capitalizeFirst(this._firstName)
        },
        set: function(value) {
            this._firstName = value
        }
    });

    Object.defineProperty(this, 'lastName', {
    get: function(){
        return this.capitalizeFirst(this._lastName)
    },
    set: function(value) {
        this._lastName = value
    }
    });

    Object.defineProperty(this, 'fullName', {
    get: function(){
        return this.firstName + ' ' + this.lastName
// Becasue I am accessing firstName and lastName from getter and setter, it already knows
// that it is capitalized
    },
    });
}

Person.prototype.capitalizeFirst = function (value) { // capitalizing first letter
    return value.charAt(0).toUpperCase() + value.slice(1);
}

// Object Literal
const PersonObj = {
    _firstName: 'jane',
    _lastName:'doe',

    get firstName() {
        return Person.prototype.capitalizeFirst(this._firstName);
    },
    set firstName(value) {
        this._firstName = value;
    },

    get lastName() {
        return Person.prototype.capitalizeFirst(this._lastName);
    },
    set lastName(value) {
        this._lastName = value;
    },

    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName) // firstName, without _, is becasue we defined it in Object.defineProperty()
console.log(person1.lastName)
console.log(person1.fullName) // John Doe

const person2 = Object.create(PersonObj);
console.log(person2.firstName) // Jane
console.log(person2.lastName) // Doe
console.log(person2.fullName) // Jane Doe