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

    pop() {
        // this._items.pop() - easer method, or .slice(), but this time we are going the OG, 
        // all manual
        if(this.isEmpty()) {
            return 'Underflow'
        }  // in this case because we do stacked pop, we want the three to pop off, cus that was the last in

        const item = this._items[this._count - 1];
        this._count--;

        for(let i = this._count; i < this._items.length; i++){
            this._items[i] = this._items[i+1];
// Taking each of the items and basically adding 1 to the index is it pushes them, it shifhts them
// to the left, so we are getting rid of the last item, and then we are shifting the rest to the left.
// That's what we are doing with this loop.
        }
        this._items.length = this._count;
        return item;

    }

    peek() {
        if(this.isEmpty()) {
            return 'No Items in stack';
        }
        return this._items[this._count - 1];
    }

    isEmpty(){
        return this._count === 0;
    }

    length(){
        return this._count;
    }

    clear() {
        this._items = [];
        this._count = 0;
    }
}

const stack = new Stack();

stack.push('Item 1')
stack.push('Item 2')
stack.push('Item 3')
stack.push('Item 4')
stack.push('Item 5')

stack.pop() // item 3 is gone
stack.clear();
console.log('Top Item: ', stack.peek()) 
console.log('Stack Lenght: ', stack.length())

console.log(stack)