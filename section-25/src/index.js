import { HashTable } from './hash-table.js';

// Create a new hash table with a size of 100
const hashTable = new HashTable(100);

// Set some key-value pairs
hashTable.set('firstName', 'John');
hashTable.set('lastName', 'Doe');
hashTable.set('age', 30);
hashTable.set('email', 'john.doe@example.com');

// Get the values using the keys
console.log(hashTable.get('firstName')); // Outputs: John
console.log(hashTable.get('lastName'));  // Outputs: Doe
console.log(hashTable.get('age'));       // Outputs: 30
console.log(hashTable.get('email'));     // Outputs: john.doe@example.com

// Try to get a value using a non-existent key
console.log(hashTable.get('address'));   // Outputs: undefined

console.log(hashTable.keys());
console.log(hashTable.values());