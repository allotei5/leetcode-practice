/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let str = ''
    for (let char of s) {
        str += char.charCodeAt(0) - 96
    }
    while (k > 0) {
        var sum = 0

        for (let char of str) {
            sum += parseInt(char)
        }
        str = sum.toString()
        k--
    }
    
    return sum
};