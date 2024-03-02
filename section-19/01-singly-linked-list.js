class Node {
    // Public properties
    val;
    next;

    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const node = new Node(val);
        if (!this.head) {
            this.head = this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;

        return this;
    }

    pop() {
        if(!this.head) {
            return null;
        }
        
        let current = this.head;
        let newTail = null;

        while(current.next) {
            newTail = current;
            current = current.next;
        }

        if (!newTail) {
            this.head = null;
            this.tail = null;
        } else {
            newTail.next = null;
            this.tail = newTail;
        }
        this.length--;
        return current;
    }

    shift() {
        if(!this.head) {
            return null;
        }

        const current = this.head;
        this.head = this.head.next;
        this.length--;

        if(this.length === 0) {
            this.tail = null;
        }

        current.next = null;

        return current;
    }

    unshift(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }

        let counter = 0;
        let current = this.head;
        while(counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    set(index, val) {
        const node = this.get(index);
        if(node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) {
            return null;
        } else if(index === 0) {
            return this.unshift(val);
        } else if(index === this.length) {
            return this.push(val);
        } 
        
        const newNode = new Node(val);
        const preNode = this.get(index - 1);
        newNode.next = preNode.next;
        preNode.next = newNode;
        this.length++;
        return this;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return null;
        } else if(index === 0) {
            return this.shift();
        } else if(index === this.length - 1) {
            return this.pop();
        }

        const node = this.get(index - 1);
        
        const itemToRemove = node.next;
        node.next = itemToRemove.next;

        itemToRemove.next = null;
        this.length--;

        return itemToRemove;
    }

    reverse() {
        // [this.head, this.tail] = [this.tail, this.head];

        let pre = null;
        let current = this.head;
        let next;

        for(let index = 0; index < this.length; index++) {
            next = current.next;
            current.next = pre;
            pre = current;
            current = next;
        }

        [this.head, this.tail] = [this.tail, this.head];
    }
}

// Create a new SinglyLinkedList
let list = new SinglyLinkedList();

// Use the push method
list.push('Node1');
list.push('Node2');
list.push('Node3');
console.log(list); // Should display the list with Node1, Node2, Node3

// Use the pop method
let poppedNode = list.pop();
console.log(poppedNode.val); // Should display 'Node3'
console.log(list); // Should display the list with Node1, Node2

// Use the shift method
let shiftedNode = list.shift();
console.log(shiftedNode.val); // Should display 'Node1'
console.log(list); // Should display the list with Node2

// Use the unshift method
list.unshift('Node0');
console.log(list); // Should display the list with Node0, Node2

// Use the get method
let firstNode = list.get(0);
console.log(firstNode.val); // Should display 'Node0'

let secondNode = list.get(1);
console.log(secondNode.val); // Should display 'Node2'

let nonExistentNode = list.get(2);
console.log(nonExistentNode); 

// Use the set method
let setResult1 = list.set(0, 'Node00');
console.log(setResult1); // Should display 'true'
console.log(list.get(0).val); // Should display 'Node00'

let setResult2 = list.set(1, 'Node22');
console.log(setResult2); // Should display 'true'
console.log(list.get(1).val); // Should display 'Node22'

let setResult3 = list.set(2, 'Node33');
console.log(setResult3); // Should display 'false'

// Use the insert method
list.insert(0, 'Node-1'); // Insert at the beginning
console.log(list.get(0).val); // Should display 'Node-1'

list.insert(2, 'Node11'); // Insert in the middle
console.log(list.get(2).val); // Should display 'Node11'

list.insert(list.length, 'Node33'); // Insert at the end
console.log(list.get(list.length - 1).val); // Should display 'Node33'

console.log(list.insert(-1, 'Node-2')); // Should display 'null'
console.log(list.insert(list.length + 1, 'Node44')); // Should display 'null'

// Use the remove method
let removedNode1 = list.remove(0); // Remove from the beginning
console.log(removedNode1.val); // Should display 'Node-1'

let removedNode2 = list.remove(2); // Remove from the middle
console.log(removedNode2.val); // Should display 'Node22'

let removedNode3 = list.remove(list.length - 1); // Remove from the end
console.log(removedNode3.val); // Should display 'Node33'

console.log(list.remove(-1)); // Should display 'null'
console.log(list.remove(list.length)); // Should display 'null'

console.log(list);

list.reverse();
console.log(list); // Should display 'Node11'