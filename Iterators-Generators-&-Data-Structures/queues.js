/*
Queues - First In - First out

enqueue() - to add onto the queue
dequeue() - to remove from the queue - pop off 
peek() - to see the first item in the queue
length()
isEmpty() - to check if the queue is empty
size() - to get the number of items in the queue
*/

class Queue {
    constructor () {
        this._items = [];
        this._count = 0; 
        this._front = 0; // Front represents the index of the piece of data that is in the queue
    }

    enqueue(item) {
        // this._items.push(item);  - easier way
        this._items[this._count] = item;
        this._count++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return undefined;
        }

        const item = this._items[this._front];
        for (let i = this._front; i < this._count - 1; i++) {
            this._items[i] = this._items[i + 1];
        }
        this._count--;
        this._items.length = this._count;
        return item;
    }

    peek(){
        if (this.isEmpty()) {
            return 'No Items in the queue'
        }

        return this._items[this._front];
    }

    length() {
        return this._count - this._front;
    }

    isEmpty(){
        return this._count === 0;
    }
}

const q = new Queue();

console.log('Front Item: ', q.peek()); // Front Item: no Items in the queue
console.log('Queue Length: ', q.length());// Queue Length: 0

q.enqueue('Item 1');
q.enqueue('Item 2');
q.enqueue('Item 3');

console.log('Front Item: ', q.peek()); // Front Item: Item 1 (meaning first item in, first item out)
console.log('Queue Length: ', q.length()); // Queue Length: 3

q.dequeue();

console.log('Front Item: ', q.peek()); // Front Item: Item 2 (we removed the Item 1, so its Item 2 now)
console.log('Queue Length: ', q.length()); // Queue Length: 2



