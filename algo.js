/**
 * @typedef {Object} TraversalCallbacks
 *
 * @property {function(node: BinaryTreeNode, child: BinaryTreeNode): boolean} allowTraversal
 * - Determines whether DFS should traverse from the node to its child.
 *
 * @property {function(node: BinaryTreeNode)} enterNode - Called when DFS enters the node.
 *
 * @property {function(node: BinaryTreeNode)} leaveNode - Called when DFS leaves the node.
 */
