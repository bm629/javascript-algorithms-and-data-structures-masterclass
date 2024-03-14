function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

export class MaxBinaryHeap {
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

    insert(val) {
        this.values.push(val);

        let index = this.values.length - 1;
        let parentIndex = MaxBinaryHeap._getParentIndex(index);
        while(index > 0 && this.values[index] > this.values[parentIndex]) {
            swap(this.values, index, parentIndex);
            index = parentIndex;
            parentIndex = MaxBinaryHeap._getParentIndex(index);
        }

        return this;
    }

    extractMax() {
        let length = this.values.length;
        if(length === 0) {
            return null;
        } else if(length === 1) {
            return this.values.pop();
        } 

        swap(this.values, 0, length - 1);
        const returnValue = this.values.pop();
        length--;

        let index = 0;
        let val = this.values[index];

        let leftChildIndex;
        let rightChildIndex;
        
        let swapIndex;
        while(index <= length - 1) {

            leftChildIndex = MaxBinaryHeap._getLeftChildIndex(index);
            rightChildIndex = MaxBinaryHeap._getRightChildIndex(index);

            swapIndex = null;
            if(
                leftChildIndex <= length - 1 && 
                val < this.values[leftChildIndex]
            ) {
                swapIndex = leftChildIndex;
            }

            if(
                rightChildIndex <= length - 1 && 
                val < this.values[rightChildIndex] && 
                (swapIndex === null || this.values[leftChildIndex] < this.values[rightChildIndex])
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

        return returnValue;
    }
}