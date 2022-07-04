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

/**
 * Extend missing traversal callbacks with default callbacks.
 *
 * @param {TraversalCallbacks} [callbacks] - The object that contains traversal callbacks.
 * @returns {TraversalCallbacks} - Traversal callbacks extended with defaults callbacks.
 */
