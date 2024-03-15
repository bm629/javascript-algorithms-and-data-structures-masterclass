import { WeightedGraph } from "./graph.js";

const graph = new WeightedGraph();

graph.addVetex("A");
graph.addVetex("B");
graph.addVetex("C");
graph.addVetex("D");
graph.addVetex("E");
graph.addVetex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

console.log(graph.shortestPath("A", "E"));