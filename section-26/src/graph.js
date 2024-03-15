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
}