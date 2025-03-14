/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
    // for(let i=0;i<nums.length-1;i++){
    //     if(nums[i]!==0){
    //         for(let j=i;j<nums.length-1;j++){
    //             const temp=nums[j+1]
    //             nums[j+1]=nums[j]
    //             nums[j]=temp
    //         }
    //     }
    // }
    let nonZeroIndex = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[nonZeroIndex], nums[i]] = [nums[i], nums[nonZeroIndex]]; // Swap
            nonZeroIndex++;
        }
    }
};