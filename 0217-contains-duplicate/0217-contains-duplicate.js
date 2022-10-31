/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const dict = {}
    let isDuplicate = false
    
    nums.forEach((num) => {
        if (dict[num] !== undefined) {
            isDuplicate = true
        } else {
            dict[num] = 1
        }
    })
    
    return isDuplicate
    
};