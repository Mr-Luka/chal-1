const sym = Symbol();
const sym1 = Symbol('foo');
const sym2 = Symbol('bar');

console.log(sym, sym1, sym2);
console.log(typeof sym) // symbol
console.log(sym.description) // undefined
console.log(sym1.description) // foo

console.log(Symbol('sym') === Symbol('sym')) // False 
/* Its always gonna show false, because all symbols are unique.
Where can this be useful?  with object for example
*/
const user = { //if I want to have unique ID / identifier, instead of id, i can just put a symbol
    [Symbol('id')]: 1,
    name: 'John Doe',
    email: 'john@gmail.com'
}
console.log(user) // {name: 'John Doe'...., Symbol(id): 1}
/* What I cant do:
I cant change the id by: user.id = 2
It wouldnt change it, it would just another id property
I cant, if i want to console.log(user[Symbol('id')]) it will give me undefined
*/

// Symbols are NOT enumerable (not able to be count or named one by one):

//Meaning I cant do: for ...in loop and get the symbol value or key
console.log(Object.keys(user))// ['name', 'email']   - It's not showing the Symbol
console.log(Object.values(user)) // ['John Doe', 'john@gmail.com']

for (let key in user) {
    console.log(key)
} 
// name
// email
// not getting a Symbol()

// getOwnPropertySymbols
console.log(Object.getOwnPropertySymbols(user)) // [Symbold(id)]
// it will show only the Symbol(id)

/* another way to create Symbols: 
 Symbol.for()
 This works little bit different, this is a function that takes a string as its parameter,
 and it will search for existing Symbols that have that same string as it's description,
 And if it finds one, it will return that symbol, and if not, it will create a new symbol
 with that string as it's description.
 These are esentially stored in what's called Global Symbol Registry.
 So first it checks the registry before creating it.
 example:
*/
const sym3 = Symbol.for('foo');
const sym4 = Symbol.for('foo');
console.log(sym3 === sym4); // true
// const sym3 = Symbol('foo'); 
// const sym4 = Symbol('foo');
// console.log(sym3 === sym4); - false

console.log(Symbol.keyFor(sym3)) // foo
console.log(Symbol.keyFor(sym1)); // undefined -  because I did not create using Symbol.for()

console.log(sym1.toString()) // it will give me a string variation: Symbol(foo)
console.log(sym3.toString()) // same, Symbol(foo) - string
console.log(sym.toString()) // Symbol()

console.log(sym1.valueOf()) // gives me the actual Symbol- the actual value: Symbol(foo)
console.log(sym3.valueOf()) // same: Symbol(foo)
console.log(sym.valueOf()) // same: Symbol()

// to see Built in symbols, and to see the list of those:
console.log(Object.getOwnPropertyNames(Symbol))