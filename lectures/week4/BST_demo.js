class BSTNode {
    constructor(val) {
        this.value = val;
        this.left = null; // Everything smaller goes to the left
        this.right = null; // Everything bigger goes to the right
    }
}

class BST {
    constructor() {
        this.root = null; // We'll start off with nothing in our Binary Search Tree
    }

    addNode(newValue) {
        if (this.root === null) {
            this.root = new BSTNode(newValue);
            return this; // Allow for chaining
        }
        let runner = this.root; // Start at the root (top) of the tree
        // Keep moving down the tree
        while (runner !== null) {
            if (newValue < runner.value) { // Small
                if (runner.left === null) {
                    runner.left = new BSTNode(newValue);
                    return this;
                } else {
                    runner = runner.left; // Move left
                }
            } else { // Bigger
                if (runner.right === null) {
                    runner.right = new BSTNode(newValue);
                    return this;
                } else {
                    runner = runner.right; // Move right
                }
            }
        }
        return this;
    }

    // Find the size of the tree (assuming you didn't an attribute for that in your BST class)
    size(curNode = this.root) { // Starting point will be the root of the tree (later on a child node that will serve as teh parent node)
        if (curNode === null) {
            return 0; // Nothing to look at
        } else {
            let numNodesLeft = this.size(curNode.left); // Recursively count on the left (need "this.", otherwise you get an error)
            let numNodesRight = this.size(curNode.right); // Recursively count on the right
            return numNodesLeft + numNodesRight + 1; // Need the +1 to account for the parent node
        }
    }
}

let myBST = new BST();
console.log(myBST.size());
myBST.addNode(30);
myBST.addNode(25);
myBST.addNode(40);
myBST.addNode(20);
console.log(myBST);
// console.log(myBST.root.value);
console.log(myBST.root.left);
console.log(myBST.root.right);
console.log(myBST.size());