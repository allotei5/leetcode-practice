/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const dict = {
        ')' : '(',
        '}' : '{',
        ']' : '['
    }
    
   if(s.length % 2 != 0) {
        return false
    }
    
    const stack = []
    
    for (let i=0; i<s.length; i++) {
        if (dict[s[i]] === undefined) {
            stack.push(s[i])
        } else {
            let lastItem = stack[stack.length-1]
            if (dict[s[i]] === lastItem) {
                stack.pop()
            } else {
                return false
            }
        }
    }
    
    if (stack.length === 0) {
        return true
    }
    return false
};