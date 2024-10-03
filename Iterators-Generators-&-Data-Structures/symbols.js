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