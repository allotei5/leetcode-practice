/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSub = nums[0]
    let curSum = 0
    
    nums.forEach((num) => {
        if (curSum < 0) {
            curSum = 0
        }
        curSum += num
        maxSub = Math.max(maxSub, curSum)
    })
    
    return maxSub
};