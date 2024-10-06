/*
Custom data structers, data structures that are not build into the language.
These are really common in when you are looking at like data structures and algorithms,
when you are studying for interviews and stuff like that.
Stacks for instance are not available just in JavaScript, You cant say something equals stack.
Like you can a map or a set or an array. But we are gonna create a class that lets us do that
and it has to behave like a stack.
Stack is last in - first out

Stack Class Methods:
push() - adds an item to the top of the stack
pop() - removes an item from the top of the stack
peek() - looks at the item on the top of the stack
length() - gives us the length of the items in the stack
isEmpty() - checks if the stack is empty true/false
clear() - clear everything of the stack
*/

class Stack {
    constructor () {
        this._items = []; // - property in a constructor, using underscore becase we are 
// not gonna be accessing this property outside of the class.
        this._count = 0 // count of the stack, how many items are in it
    }

    push(item) {
        // this._items.push(item); or:
        this._items[this._count] = item;
        this._count++;
    }
}

const stack = new Stack();

stack.push('Item 1')
stack.push('Item 2')
stack.push('Item 3')
console.log(stack)