import { PriorityQueue } from "./priority-queue.js";

export class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVetex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2, weight) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

            if(this.adjacencyList[vertex1].indexOf(vertex2) === -1) {
                this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
            }

            if(this.adjacencyList[vertex2].indexOf(vertex1) === -1) {
                this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
            }
        }
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

            let index1 = this.adjacencyList[vertex1].map((item) => item.node).indexOf(vertex2);
            if(index1 !== -1) {
                this.adjacencyList[vertex1].splice(index1, 1);
            }

            let index2 = this.adjacencyList[vertex2].map((item) => item.node).indexOf(vertex1);
            if(index2 !== -1) {
                this.adjacencyList[vertex2].splice(index2, 1);
            }
        }
    }

    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            for(let index = 0; index < this.adjacencyList[vertex].length; index++) {
                this.removeEdge(vertex, this.adjacencyList[vertex][index].node);
            }

            delete this.adjacencyList[vertex];
        }
    }

    shortestPath(startVertex, endVertex) {

        let result = { path: [], distance: 0 };
        if(this.adjacencyList[startVertex] && this.adjacencyList[endVertex]) {
            
            const distances = {};
            const previous = {};
            const queue = new PriorityQueue();

            for (let vertex in this.adjacencyList) {
                let distance = Infinity;
                if(vertex === startVertex) {
                    distance = 0;
                }
                
                distances[vertex] = distance;
                previous[vertex] = null;
                queue.enqueue(vertex, distance);
            }

            let smallestVertex;
            while(queue.size()) {
                smallestVertex = queue.dequeue();
                if(smallestVertex === endVertex) {
                    while(smallestVertex) {
                        result.path.unshift(smallestVertex);
                        smallestVertex = previous[smallestVertex];
                    }
                    result.distance = distances[endVertex];
                    break;
                }

                if(smallestVertex || distances[smallestVertex] !== Infinity) {
                    const edges = this.adjacencyList[smallestVertex];
                    for(let neighbourNode of edges) {
                        const distance = distances[smallestVertex] + neighbourNode.weight;
                        if(distance < distances[neighbourNode.node]) {
                            distances[neighbourNode.node] = distance;
                            previous[neighbourNode.node] = smallestVertex;
                            queue.enqueue(neighbourNode.node, distance);
                        }
                    }
                }
            }
        }
        return result;
    }
}