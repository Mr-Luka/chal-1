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


    // Insert last node (Tail)


    // Insert at index


    // Get at Index


    // Remove at index


    // Print list data

    
    // Clear List
}

const list = new LinkedList();

console.log(list)