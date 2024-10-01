import {capitalizeWords, makeMoney } from "./modules/utils.js";
import Person from './modules/Person.js'

console.log(capitalizeWords('hello world'))
console.log(makeMoney(100))

const person1 = new Person('Luka', 31)
person1.greet(); // Hello my name is Luka and I am 31