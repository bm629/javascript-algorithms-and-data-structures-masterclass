import { Queue } from "./queue";

export class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVetex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

            if(this.adjacencyList[vertex1].indexOf(vertex2) === -1) {
                this.adjacencyList[vertex1].push(vertex2);
            }

            if(this.adjacencyList[vertex2].indexOf(vertex1) === -1) {
                this.adjacencyList[vertex2].push(vertex1);
            }
        }
    }

    removeEdge(vertex1, vertex2) {
        if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {

            let index1 = this.adjacencyList[vertex1].indexOf(vertex2);
            if(index1 !== -1) {
                this.adjacencyList[vertex1].splice(index1, 1);
            }

            let index2 = this.adjacencyList[vertex2].indexOf(vertex1);
            if(index2 !== -1) {
                this.adjacencyList[vertex2].splice(index2, 1);
            }
        }
    }

    removeVertex(vertex) {
        if(this.adjacencyList[vertex]) {
            for(let index = 0; index < this.adjacencyList[vertex].length; index++) {
                this.removeEdge(vertex, this.adjacencyList[vertex][index]);
            }

            delete this.adjacencyList[vertex];
        }
    }

    dfs_recursive(startVertex) {
        const result = [];
        const visited = {};

        const adjacencyList = this.adjacencyList;
        (function traverse(vertex) {
            const edges = adjacencyList[vertex];
            if(edges) {
                visited[vertex] = true;
                result.push(vertex);

                for(let index = 0; index < edges.length; index++) {
                    if(!visited[edges[index]]) {
                        traverse(edges[index]);
                    }
                }
            }
        })(startVertex);

        return result;
    }

    dfs_iterative(startVertex) {
        const result = [];
        const visited = {};
        const stack = [startVertex];

        while(stack.length > 0) {
            const vertex = stack.pop();
            if (this.adjacencyList[vertex] && !visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);

                this.adjacencyList[vertex].forEach((item) => {
                    if(!visited[item]) {
                        stack.push(item);
                    }
                });
            }
            
        }

        return result;
    }

    bfs(startVertex) {
        const result = [];
        const visited = {};
        const queue = new Queue();
        queue.enqueue(startVertex);

        while(queue.size > 0) {
            const vertex = queue.dequeue();
            if (this.adjacencyList[vertex] && !visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);

                this.adjacencyList[vertex].forEach((item) => {
                    if(!visited[item]) {
                        queue.enqueue(item);
                    }
                });
            }
            
        }

        return result;
    }
}