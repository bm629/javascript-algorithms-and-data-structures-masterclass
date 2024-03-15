export const Priority = Object.freeze({
    RealTime: 1,
    High: 2,
    Medium: 3,
    Noraml: 4,
    Low: 5,
    VeryLow: 6
});

function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}


export class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

export class PriorityQueue {
    constructor() {
        this.values = [];
    }

    static _getParentIndex(index) {
        if(index < 3) {
            return 0;
        }
        return Math.floor((index - 1) / 2);
    }

    static _getLeftChildIndex(index) {
        return (2 * index) + 1;
    }

    static _getRightChildIndex(index) {
        return (2 * index) + 2;
    }

    enqueue(val, priority) {
        const newNode = new Node(val, priority);
        this.values.push(newNode);

        let length = this.values.length;
        let index = length - 1;
        let parentIndex = PriorityQueue._getParentIndex(index);

        while(index > 0 && this.values[index].priority < this.values[parentIndex].priority) {
            swap(this.values, index, parentIndex);
            index = parentIndex;
            parentIndex = PriorityQueue._getParentIndex(index);
        }

        return this;
    }

    dequeue() {
        let length = this.values.length;

        if(length === 0) {
            return undefined;
        } else if(length === 1) {
            return this.values.pop().val;
        }

        const returnValNode = this.values[0];
        this.values[0] = this.values.pop();
        length--;

        let index = 0;
        let letfChildIndex, rightChildIndex;

        while(index < length - 1) {
            letfChildIndex = PriorityQueue._getLeftChildIndex(index);
            rightChildIndex = PriorityQueue._getRightChildIndex(index);

            let swapIndex = null;
            if(letfChildIndex < length && this.values[letfChildIndex].priority < this.values[index].priority) {
                swapIndex = letfChildIndex;
            }

            if(
                rightChildIndex < length && 
                this.values[rightChildIndex].priority < this.values[index].priority &&
                (swapIndex === null || this.values[rightChildIndex].priority < this.values[letfChildIndex].priority)
            ) {
                swapIndex = rightChildIndex;
            }

            if(swapIndex !== null) {
                swap(this.values, index, swapIndex);
                index = swapIndex;
            } else {
                break;
            }
        }

        return returnValNode.val;
    }

    size() {
        return this.values.length;
    }
}