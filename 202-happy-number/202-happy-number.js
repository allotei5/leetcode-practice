/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    
    const sumOfSquares = (n) => {
        let output = 0
        let digit
        
        while (n !== 0) {
            digit = n % 10
            digit = digit ** 2
            output += digit
            n = Math.floor(n/10)
        }
        
        return output
    }
    
    const seen = {}
    
    while (seen[n] === undefined) {
        seen[n] = true
        n = sumOfSquares(n)
        
        if (n === 1) {
            return true
        }
        
    }
    
    return false

};