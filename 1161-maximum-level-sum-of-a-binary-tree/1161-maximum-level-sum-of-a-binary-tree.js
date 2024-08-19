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
 * @return {number}
 */
var maxLevelSum = function(root) {
    if(!root) return 0
    const queue=[root]
    const sum=[]
    while(queue.length){
        const vals=[]
        const n=queue.length
        for(let i=0;i<n;i++){
            const node=queue.shift()

            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            vals.push(node.val)
        }
        console.log(vals)
        sum.push(vals.reduce((acc,cur)=>acc+cur,0))
    }
    const maxSum=Math.max(...sum)
    return sum.findIndex(v=>v===maxSum)+1
};