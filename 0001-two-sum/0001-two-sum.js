/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const dict = {}
    const res = []
    nums.forEach((num, index) => {
        let diff = target - num
        if (dict[num] === undefined) {
            dict[diff] = index
        } else {
            res.push(dict[num], index)
        }
    })
    return res
};