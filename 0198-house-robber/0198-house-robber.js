/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const dp=new Array(nums).fill(0)
    if(nums.length===1) return nums[0]
    dp[0]=nums[0]
    dp[1]=nums[1]
    for(let i=2;i<nums.length;i++){
        dp[i]=Math.max(...dp.slice(0,i-1))+nums[i]
    }
    return Math.max(...dp)
};