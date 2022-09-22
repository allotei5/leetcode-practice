/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = 0;
    let digit = 0;
    
    if (num < 10) {
        return num
    }
    
    while (num !== 0) {
        digit = num % 10
    
        sum += digit
        
        num = Math.floor(num/10)
    }
    
    return addDigits(sum)
};