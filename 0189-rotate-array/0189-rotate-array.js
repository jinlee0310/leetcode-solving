/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const index=nums.length-(k%nums.length)
    
    const first=nums.splice(0,index)
    nums.push(...first)
};