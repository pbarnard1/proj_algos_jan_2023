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

    displayValues() {
        let curNode = this.head; // Start at the beginning of the list
        while (curNode) { // OR curNode !== null - basically, while there is a node to look at
            console.log(curNode.data); // Grab the value that's in the current node we're examining
            curNode = curNode.next; // Moves us to the next node
        }
        return this;
    }

    removeFromFront() {
        if (this.head === null) { // Edge case: list is empty, so return null
            return null;
        }
        let nodeToRemove = this.head; // Grab onto the first node
        this.head = nodeToRemove.next; // Move the head of the list down
        nodeToRemove.next = null;
        return nodeToRemove; // To return the node we removed but NOT have chaining
    }

    removeFromBack() {
        if (this.head === null) { // Edge case: list is empty, so return null
            return null;
        }
        if (this.head.next === null) { // Edge case: list only has one node left to remove
            this.head = null;
            return this;
        }
        let curNode = this.head;
        // Looping until we reach the *second*-to-last node in the list
        while (curNode.next.next !== null) {
            // console.log(curNode.data);
            curNode = curNode.next;
        }
        // console.log("Outside of loop:");
        // console.log(curNode.data);

        let nodeToRemove = curNode.next;
        curNode.next = null;
        return this; // If you want to allow chaining, return this
    }
}

let firstNode = new Node(5);
let secondNode = new Node(10);

let mySLL = new SLL();
mySLL.addToBack(firstNode);
mySLL.addToBack(secondNode);
mySLL.addToBack(new Node(20));
// mySLL.displayValues();
console.log("Removing from back");
mySLL.removeFromBack();
mySLL.displayValues();

console.log("Removing from back");
mySLL.removeFromBack();
mySLL.displayValues();

console.log("Removing from back");
mySLL.removeFromBack();
mySLL.displayValues();

console.log("Removing from back");
mySLL.removeFromBack();
mySLL.displayValues();

// console.log("Now removing front");
// mySLL.removeFromFront();
// mySLL.displayValues();
// console.log("Now removing front");
// mySLL.removeFromFront();
// mySLL.displayValues();
// console.log("Now removing front");
// mySLL.removeFromFront();
// mySLL.displayValues();
// console.log("Now removing front");
// mySLL.removeFromFront();
// mySLL.displayValues();


// mySLL.addToFront(firstNode);
// console.log(mySLL.head.data);

// mySLL.addToFront(secondNode);
// console.log(mySLL.head.data);
// console.log(mySLL.head.next.data);

// mySLL.addToBack(new Node(20));
// console.log(mySLL.head.next.next.data);