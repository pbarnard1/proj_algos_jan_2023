class Node {
    constructor(data) {
        this.data = data; // Value it will hold
        this.next = null; // What Node to point to next
    }
}

class SLL {
    constructor() {
        this.head = null; // The first Node in the list (initially none in there, so we'll point to null for now)
    }

    addToFront(newNode) { // Similar to Arrays.unshift()
        newNode.next = this.head; // This connects the new node to the list
        this.head = newNode; // Move the head of the list accordingly
        return this; // Allows for chaining
    }

    addToBack(newNode) { // Similar to Arrays.push()
        // Edge case: the list is empty
        if (this.head === null) {
            this.head = newNode;
            return this; // To ensure we don't run the rest of the method
        }
        let curNode = this.head;
        // Keep traveling while there is at least one node ahead of us
        while (curNode.next !== null) {
            curNode = curNode.next;
        }
        // Reached the end of the list - so connect this node to the end
        curNode.next = newNode;
        return this;
    }

    // Big O notation and how that would affect us if we add a tail attribute
}

let firstNode = new Node(10);
let secondNode = new Node(5);

let mySLL = new SLL();
mySLL.addToBack(firstNode);
mySLL.addToBack(secondNode);
console.log(mySLL);
// mySLL.addToFront(firstNode);
// console.log(mySLL.head.data);

// mySLL.addToFront(secondNode);
// console.log(mySLL.head.data);
// console.log(mySLL.head.next.data);

// mySLL.addToBack(new Node(20));
// console.log(mySLL.head.next.next.data);