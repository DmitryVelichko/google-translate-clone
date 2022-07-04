/**
 * @typedef {Object} TraversalCallbacks
 *
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal
 * - Determines whether DFS should traverse from the node to its child.
