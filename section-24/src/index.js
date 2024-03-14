import { MaxBinaryHeap  } from "./max-binary-heap.js";
import { Priority, PriorityQueue } from "./priority-queue.js";

const maxHeap = new MaxBinaryHeap();

maxHeap
    .insert(41)
    .insert(39)
    .insert(33)
    .insert(18)
    .insert(27)
    .insert(12)
    .insert(55);

console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());
console.log(maxHeap.values);
console.log(maxHeap.extractMax());


const priorityQueue = new PriorityQueue();
priorityQueue.enqueue('High1', Priority.High);
priorityQueue.enqueue('RealTime1', Priority.RealTime);
priorityQueue.enqueue('RealTime2', Priority.RealTime);
priorityQueue.enqueue('RealTime3', Priority.RealTime);
priorityQueue.enqueue('RealTime4', Priority.RealTime);
priorityQueue.enqueue('VeryLow1', Priority.VeryLow);
priorityQueue.enqueue('Normal1', Priority.Noraml);
priorityQueue.enqueue('Medium1', Priority.Medium);
priorityQueue.enqueue('Low1', Priority.Low);
priorityQueue.enqueue('Medium2', Priority.Medium);
priorityQueue.enqueue('High2', Priority.High);
priorityQueue.enqueue('Normal2', Priority.Noraml);

console.log(priorityQueue.values.map((i) => i.val));

console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));
console.log(priorityQueue.dequeue());
console.log(priorityQueue.values.map((i) => i.val));