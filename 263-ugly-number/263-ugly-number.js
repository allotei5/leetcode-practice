/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function(n) {
    if (n <= 0) {
        return false
    }
    
    [2,3,5].forEach(p => {
        while (n%p === 0) {
            n = Math.floor(n/p)
        }
    })
    
    return n == 1
};