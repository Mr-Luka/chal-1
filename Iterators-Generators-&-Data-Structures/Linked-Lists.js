/*
LinkedList Class Methods:

insertFirst() - Inserts a new node at the beginning of the list.
insertLast() - Inserts a new node at the end of the list.
insertAt() - with an index so we can insert wherever we want
getAt() - get at with an index, we can get any node we want
removeAt() - remove at with an index, we can remove any node we want
printListData() - Whatever the values are, we wanna be able to print those
clearList()
*/
// Hard coded Linked list:

// const node1 = {
//     value: 100
// }

// const node2 = {
//     value: 200
// }

// const node3 = {
//     value: 300
// }

// node1.next = node2;
// node2.next = node3;
// node3.next = null;
// console.log(node1, node2, node3) // {value: 100, next: {value 200}, next: {value: 300} }

class Node {
    constructor(value) { // taking in value of the node
        this._value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this._head = null;
        this._length = 0;
    }

    // Insert first node (Head)
    insertFirst(value) {
        const newNode = new Node(value);
        newNode.next = this._head;
        this._head = newNode;
        this._length++
    }

    // Insert last node (Tail)
    insertLast(value) {
        const newNode = new Node(value);
        let current = this._head;

        while(current.next) {
            current = current.next;
        }
        current.next = newNode;
        this._length++;
    } 

    // Insert at index
    insertAt(value, index) {
        if (index > this._length) {
            return;
        }
        if (index === 0) {
            this._insertFirst(value);
            return;
        }

        const newNode = new Node(value);
        let current, previous;
        current = this._head;
        let count = 0;

        while(count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this._length++;
    }

    // Get at Index
    getAt(index) {
        let current = this._head;
        let count = 0;
        while(current) {
            if(count === index) {
                console.log(current._value)
            }
            count++
            current = current.next;
        }
        return null;
    }

    // Remove at index
    removeAt(index) {
        if(index > this._length) {
            return;
        }
        let current = this._head;
        let previous;
        let count = 0;

        if(index === 0) {
            this._head = current.next;
        } else {
            while(count < index) {
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this._length--;
    }

    // Print list data
    printListData() {
        let current = this._head;
        let list = '';

        while(current) {
            list += current._value + ' ';
            current = current.next;
        } 
        console.log(list);
    }
    
    // Clear List
    clearListData() {
        this._head = null;
        this._length = 0;
    }
}

const list = new LinkedList();

list.insertFirst(100)// value 100
list.insertFirst(200) // Head: value 200 since its inserted first
list.insertFirst(300) // Head: value 300, next is 200 ... linked list

list.insertLast(50); // _length 4, _head: Node next: _value 300
list.insertAt(500, 2); // 300 200 500 100 50
list.insertAt(600, 4); // 300 200 500 100 600 50

list.removeAt(5) // 300 200 500 100 600

// list.clearListData()
list.printListData(); // 300 200 100 50
// 300 is head and since we instertLast 50, thats the tail

list.getAt(2); // 500
list.getAt(0); // 300


