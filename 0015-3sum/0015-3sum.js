/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const res = []
    nums.sort((a,b) => (a-b))
    
    nums.forEach((a, i) => {
        if (i>0 && a === nums[i-1]) {
            return;
        }
        
        let l = i + 1
        let r = nums.length - 1
        
        while (l<r) {
            let threeSum = a + nums[l] + nums[r]
            if (threeSum > 0) {
                r -= 1
            } else if (threeSum < 0) {
                l += 1
            }
            else {
                res.push([a, nums[l], nums[r]])
                l += 1
                while (nums[l] == nums[l-1] && l < r) {
                    l += 1
                }
            }
        }
    })
    
    return res;
};