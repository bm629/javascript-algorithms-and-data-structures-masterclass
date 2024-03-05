function stringify(obj) {
    let cache = [];
    let str = JSON.stringify(obj, function(key, value) {
      if (typeof value === "object" && value !== null) {
        if (cache.indexOf(value) !== -1) {
          // Circular reference found, discard key
          return;
        }
        // Store value in our collection
        cache.push(value);
      }
      return value;
    });
    cache = null; // reset the cache
    return str;
  }

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    pop() {
        if(!this.head) {
            return null;
        }

        const tail = this.tail;

        if(this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null;
            tail.prev = null;
        }

        this.length--;

        return tail;
    }

    shift() {
        if(!this.head) {
            return null;
        }

        const oldHead = this.head;
        if(this.length === 1) {
            this.head = this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }

        this.length--;
        return oldHead;

    }

    unshift(val) {
        const newNode = new Node(val);
        if(this.length === 0) {
            this.head = this.tail = newNode;
        } else {
            this.head.prev = newNode;
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

        let middle = Math.floor(this.length / 2);
        let currentNode;
        let counter;

        if(index <= middle) {
            currentNode = this.head;
            counter = 0;
            while(counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
        } else {
            currentNode = this.tail;
            counter = this.length - 1;
            while(counter > index) {
                currentNode = currentNode.prev;
                counter--;
            }
        }

        return currentNode;
    }

    set(index, val) {
        const node = this.get(index);
        if(!node) {
            return false;
        }

        node.val = val;

        return true;
    }

    insert(index, val) {
        if(index < 0 || index > this.length) {
            return null;
        } else if(index === 0) {
            return this.unshift(val);
        } else if(index === this.length) {
            return this.push(val);
        }

        const currentIndexNode = this.get(index);
        const newNode = new Node(val);
        const currentIndexPrevNode = currentIndexNode.prev;

        currentIndexPrevNode.next = newNode;
        newNode.prev = currentIndexPrevNode;

        newNode.next = currentIndexNode;
        currentIndexNode.prev = newNode;

        this.length++;

        return this;
    }

    remove(index) {
        if(index < 0 || index >= this.length) {
            return null;
        } else if(index === 0) {
            return this.shift();
        } else if(index === this.length -1) {
            return this.pop();
        }

        const deletedNode = this.get(index);
        const beforNode = deletedNode.prev;
        const afterNode = deletedNode.next;

        beforNode.next = afterNode;
        afterNode.prev = beforNode;

        deletedNode.next = deletedNode.prev = null;
        this.length--;

        return deletedNode;
    }

    reverse() {
        let counter = 0;
        let currentNode = this.head;
        let nextNode;

        while(counter < this.length) {
            nextNode = currentNode.next;

            [ currentNode.prev, currentNode.next ] = [ currentNode.next, currentNode.prev ];

            currentNode = nextNode;
            counter++;
        }

        [ this.head, this.tail ] = [ this.tail, this.head ];

        return this;
    }
}

// Create a new DoublyLinkedList
let list = new DoublyLinkedList();

// Use the push method
list.push('Node1');
console.log(list.head.val); // Should display 'Node1'
console.log(list.tail.val); // Should display 'Node1'
console.log(list.length); // Should display 1

list.push('Node2');
console.log(list.head.val); // Should display 'Node1'
console.log(list.head.next.val); // Should display 'Node2'
console.log(list.tail.val); // Should display 'Node2'
console.log(list.tail.prev.val); // Should display 'Node1'
console.log(list.length); // Should display 2

// Continue from the previous list
// The list should now contain Node1 and Node2

// Use the pop method
let poppedNode1 = list.pop();
console.log(poppedNode1.val); // Should display 'Node2'
console.log(list.tail.val); // Should display 'Node1'
console.log(list.length); // Should display 1

let poppedNode2 = list.pop();
console.log(poppedNode2.val); // Should display 'Node1'
console.log(list.head); // Should display null
console.log(list.tail); // Should display null
console.log(list.length); // Should display 0

list.push('Node1');
list.push('Node2');
list.push('Node3');

// Use the shift method
let shiftedNode1 = list.shift();
console.log(shiftedNode1.val); // Should display 'Node1'
console.log(list.head.val); // Should display 'Node2'
console.log(list.length); // Should display 2

let shiftedNode2 = list.shift();
console.log(shiftedNode2.val); // Should display 'Node2'
console.log(list.head.val); // Should display 'Node3'
console.log(list.length); // Should display 1

let dll = new DoublyLinkedList();

// Use the unshift method
dll.unshift('Node1');
console.log(dll.head.val); // Should display 'Node1'
console.log(dll.tail.val); // Should display 'Node1'
console.log(dll.length); // Should display 1

dll.unshift('Node2');
console.log(dll.head.val); // Should display 'Node2'
console.log(dll.head.next.val); // Should display 'Node1'
console.log(dll.tail.val); // Should display 'Node1'
console.log(dll.tail.prev.val); // Should display 'Node2'
console.log(dll.length); // Should display 2

list.pop()
console.log(stringify(list));

list.push('Node1');
list.push('Node2');
list.push('Node3');

// Use the get method
let getNode1 = list.get(0);
console.log(getNode1.val); // Should display 'Node1'

let getNode2 = list.get(1);
console.log(getNode2.val); // Should display 'Node2'
// 
let getNode3 = list.get(2);
console.log(getNode3.val); 

// Use the set method
let setResult1 = dll.set(0, 'Node00');
console.log(setResult1); // Should display true
console.log(dll.get(0).val); // Should display 'Node00'

let setResult2 = dll.set(1, 'Node22');
console.log(setResult2); // Should display true
console.log(dll.get(1).val); // Should display 'Node22'

let setResult3 = dll.set(2, 'Node33');
console.log(setResult3); // Should display false

// Use the insert method
let insertResult1 = dll.insert(0, 'Node-1'); // Insert at the beginning
console.log(insertResult1); // Should display true
console.log(dll.get(0).val); // Should display 'Node-1'

let insertResult2 = dll.insert(2, 'Node11'); // Insert in the middle
console.log(insertResult2); // Should display true
console.log(dll.get(2).val); // Should display 'Node11'

let insertResult3 = dll.insert(dll.length, 'Node33'); // Insert at the end
console.log(insertResult3); // Should display true
console.log(dll.get(dll.length - 1).val); // Should display 'Node33'

let insertResult4 = dll.insert(-1, 'Node-2'); // Invalid position
console.log(insertResult4); // Should display false

let insertResult5 = dll.insert(dll.length + 1, 'Node44'); // Invalid position
console.log(insertResult5); // Should display false

// Use the remove method
let removeResult1 = dll.remove(0); // Remove from the beginning
console.log(removeResult1.val); // Should display 'Node-1'
console.log(dll.get(0).val); // Should display 'Node00'

let removeResult2 = dll.remove(2); // Remove from the middle
console.log(removeResult2.val); // Should display 'Node22'
console.log(dll.get(2).val); // Should display 'Node33'

let removeResult3 = dll.remove(dll.length - 1); // Remove from the end
console.log(removeResult3.val); // Should display 'Node33'
console.log(dll.get(dll.length - 1).val); // Should display 'Node11'

let removeResult4 = dll.remove(-1); // Invalid position
console.log(removeResult4); // Should display null

let removeResult5 = dll.remove(dll.length); // Invalid position
console.log(removeResult5); // Should display null

// Use the reverse method
dll.reverse();

console.log(dll.get(0).val); // Should display 'Node11'
console.log(dll.get(1).val); // Should display 'Node00'