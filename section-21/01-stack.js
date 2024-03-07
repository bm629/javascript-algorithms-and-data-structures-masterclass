class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkListStack {
    constructor() {
        this.first = this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);

        if(this.size === 0) {
            this.first = this.last = newNode;
        } else {
            newNode.next = this.first;
            this.first = newNode;
        }
        return ++this.size;
    }

    pop() {
        if(this.size === 0) return null;

        const returnVal = this.first;
        this.first = this.first.next;
        this.size--;

        if(this.size === 0) {
            this.last = null;
        }

        return returnVal.val;
    }
}

class ArrayStack {
    constructor() {
        this.data = [];
    }

    push(val) {
        this.data.push(val);
        return this.data.length;
    }

    pop() {
        return this.data.pop();
    }
}

// Create a new ArrayStack
let arrayStack = new ArrayStack();

// Use the push method
arrayStack.push('Item1');
arrayStack.push('Item2');
arrayStack.push('Item3');

// Use the pop method
console.log(arrayStack.pop()); // Should display 'Item3'
console.log(arrayStack.pop()); // Should display 'Item2'
console.log(arrayStack.pop()); // Should display 'Item1'


// Create a new LinkListStack
let linkListStack = new LinkListStack();

// Use the push method
linkListStack.push('Item1');
linkListStack.push('Item2');
linkListStack.push('Item3');

// Use the pop method
console.log(linkListStack.pop()); // Should display 'Item3'
console.log(linkListStack.pop()); // Should display 'Item2'
console.log(linkListStack.pop()); // Should display 'Item1'