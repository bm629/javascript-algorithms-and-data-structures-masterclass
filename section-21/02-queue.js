class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        const newNode = new Node(val);

        if(this.size === 0) {
            this.first = this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue() {
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

// Create a new Queue
let queue = new Queue();

// Use the enqueue method
queue.enqueue('Item1');
queue.enqueue('Item2');
queue.enqueue('Item3');

// Use the dequeue method
console.log(queue.dequeue()); // Should display 'Item1'
console.log(queue.dequeue()); // Should display 'Item2'
console.log(queue.dequeue()); // Should display 'Item3'