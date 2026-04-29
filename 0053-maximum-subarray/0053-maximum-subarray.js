/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray=(nums)=> {
      let max=-Infinity;
      let sum=0;
      for(let i=0;i<nums.length;i++){
        if(sum<0){
            sum=0;
        }

        sum+=nums[i]

        if(sum>max){
            max=sum
        }
        
      }
      return max
    }