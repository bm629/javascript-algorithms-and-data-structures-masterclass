class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const newNode = new Node(val);
        if(!this.root) {
            this.root = newNode;
        } else {
            (function internal(node) {
                if(newNode.val < node.val) {
                    if(!node.left) {
                        node.left = newNode;
                    } else {
                        internal(node.left);
                    }
                } else {
                    if(!node.right) {
                        node.right = newNode;
                    } else {
                        internal(node.right);
                    }
                }
            })(this.root);
        }

        return this;
    }

    find(val) {
        let current = this.root;
        while(current && current.val !== val) {
            current = val < current.val ? current.left : current.right;
        }
        return !!current;
    }
}

// Create a new BinarySearchTree
let bst = new BinarySearchTree();

// Use the insert method
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(17);

// The binary search tree should now look like this:
//     10
//    /  \
//   5    15
//  / \   / \
// 2   7 12  17

// Use the search method
console.log(bst.find(7));  // Should display true
console.log(bst.find(12)); // Should display true
console.log(bst.find(20)); // Should display false