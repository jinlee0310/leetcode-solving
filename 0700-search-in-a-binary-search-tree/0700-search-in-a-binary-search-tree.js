/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    const search = (root, val) => {
        if (root === null) return null;
        if (root.val === val) return root;

        // left subtree에서 val을 찾는 재귀 호출
        const leftResult = search(root.left, val);
        if (leftResult) return leftResult;

        // right subtree에서 val을 찾는 재귀 호출
        const rightResult = search(root.right, val);
        if (rightResult) return rightResult;

        return null;
    }
    return search(root,val)
};