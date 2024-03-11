import { Queue } from "./queue";

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

export class BinarySearchTree {
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

    bfs() {
        let queue = new Queue();
        let result = [];

        if(this.root) {
            queue.enqueue(this.root);
        }

        while(queue.size > 0) {
            const node = queue.dequeue();
            result.push(node.val);

            if(node.left) {
                queue.enqueue(node.left);
            }

            if(node.right) {
                queue.enqueue(node.right);
            }
        }

        return result;
    }

    dfs_preorder() {
        let results = [];

        (function traverse(node) {
            if(!node) {
                return;
            }
            results.push(node.val);
            traverse(node.left);
            traverse(node.right);
        })(this.root);

        return results;
    }

    dfs_postorder() {
        let results = [];

        (function traverse(node) {
            if(!node) {
                return;
            }
            traverse(node.left);
            traverse(node.right);
            results.push(node.val);
        })(this.root);

        return results;
    }

    dfs_inorder() {
        let results = [];

        (function traverse(node) {
            if(!node) {
                return;
            }
            traverse(node.left);
            results.push(node.val);
            traverse(node.right);
        })(this.root);

        return results;
    }
}