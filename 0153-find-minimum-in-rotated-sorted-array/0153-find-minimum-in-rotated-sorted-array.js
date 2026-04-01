/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
            let st=0,en=nums.length-1;
        while(st<en){
            const mid = Math.floor((st + en) / 2);

            if (nums[mid] > nums[en]) {
                st = mid + 1;
            } else {
                en = mid;
            }
        }
        return nums[st];
};