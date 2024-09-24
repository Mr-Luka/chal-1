class Person {
    constructor(firstName, lastName){
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get firstName(){
        return this.capitalizeFirst(this._firstName) // to get the first letter uppercase
    }

    set firstName(value) {
        this._firstName = this.capitalizeFirst(value);
    }

    get lastName(){
        return this.capitalizeFirst(this._lastName) // to get the first letter uppercase
    }

    set lastName(value) {
        this._lastName = this.capitalizeFirst(value);
    }

    get fullName () {
        return `${this.firstName} ${this.lastName}`;
    }
    capitalizeFirst(value) {
        return value.charAt(0).toUpperCase() + value.slice(1);
    }
}

const person1 = new Person('john', 'doe');
console.log(person1.firstName); // John
console.log(person1.lastName);

person1.firstName = 'joe';
person1.lastName = 'smith';
console.log(person1.fullName); // Joe Smith
console.log(person1)

/*
Get - getter is just a method, but we want to prefix it with the word get, so whatever I put
in there, thats what im gonna put also in the console when loging out.
Set - setter is just a method, but we want to prefix it with the word set, always gonna take
in just one value as parameter that we wanna set it to ( value ) in this case.
*/