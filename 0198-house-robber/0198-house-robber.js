/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length===1) return nums[0]
    
    const dp=Array(nums.length).fill(0)

    // 1 3 3 1 1
    // 3 1 1 3 1

    dp[0]=nums[0]
    dp[1]=nums[1]

    for(let i=2;i<dp.length;i++){
        dp[i]=Math.max(...dp.slice(0,i-1))+nums[i]
    }
    // console.log(dp)
    return Math.max(...dp)
};