import { Graph } from './graph.js';

// Create a new graph
const graph = new Graph();

// Add some vertices (Indian cities)
graph.addVetex('Delhi');
graph.addVetex('Mumbai');
graph.addVetex('Chennai');
graph.addVetex('Kolkata');
graph.addVetex('Bangalore');

// Add some edges (routes between cities)
graph.addEdge('Delhi', 'Mumbai');
graph.addEdge('Mumbai', 'Chennai');
graph.addEdge('Mumbai', 'Kolkata');
graph.addEdge('Chennai', 'Bangalore');
graph.addEdge('Kolkata', 'Bangalore');

console.log(graph.adjacencyList);
// Outputs: { 'Delhi': ['Mumbai', 'Chennai'], 'Mumbai': ['Delhi', 'Chennai', 'Kolkata'], 'Chennai': ['Delhi', 'Mumbai', 'Bangalore'], 'Kolkata': ['Mumbai', 'Bangalore'], 'Bangalore': ['Chennai', 'Kolkata'] }

// Remove an edge (route between two cities)
graph.removeEdge('Mumbai', 'Kolkata');

console.log(graph.adjacencyList);
// Outputs: { 'Delhi': ['Chennai'], 'Mumbai': ['Chennai', 'Kolkata'], 'Chennai': ['Delhi', 'Mumbai', 'Bangalore'], 'Kolkata': ['Mumbai', 'Bangalore'], 'Bangalore': ['Chennai', 'Kolkata'] }

// Remove a vertex (Indian city)
graph.removeVertex('Delhi');

console.log(graph.adjacencyList);
// Outputs: { 'Mumbai': ['Chennai', 'Kolkata'], 'Chennai': ['Mumbai', 'Bangalore'], 'Kolkata': ['Mumbai', 'Bangalore'], 'Bangalore': ['Chennai', 'Kolkata'] }