import { BinarySearchTree } from "./bst";

let tree = new BinarySearchTree();

tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(17);

// The binary search tree should now look like this:
//     10
//    /  \
//   5    15
//  / \   / \
// 2   7 12  17


console.log(`BFS :: ${JSON.stringify(tree.bfs())}`);
console.log(`DFS (Pre Order) :: ${JSON.stringify(tree.dfs_preorder())}`);
console.log(`DFS (Post Order) :: ${JSON.stringify(tree.dfs_postorder())}`);
console.log(`DFS (In Order) :: ${JSON.stringify(tree.dfs_inorder())}`);