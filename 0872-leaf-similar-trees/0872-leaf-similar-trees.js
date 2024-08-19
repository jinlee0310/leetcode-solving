/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

var leafSimilar = function(root1, root2) {
    const getLeaf=(root,leaves)=>{
        if(!root.left && !root.right){
            leaves.push(root.val)
            return leaves
        }
        if(root.left) getLeaf(root.left,leaves)
        if(root.right) getLeaf(root.right,leaves)
        return leaves
    }

    const leaves1=getLeaf(root1,[])
    const leaves2=getLeaf(root2,[])
    return leaves1.join('')===leaves2.join('')
};