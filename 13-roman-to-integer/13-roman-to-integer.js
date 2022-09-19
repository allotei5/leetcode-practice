/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const obj = {
        'I' : 1,
        'V' : 5,
        'X' : 10,
        'L' : 50,
        'C' : 100,
        'D' : 500,
        'M' : 1000
    }

    let count = 0;
    for ( let i=0; i<s.length; i++) {
        let val = obj[s[i]]
        if (s[i+1] !== undefined) {
            if (val < obj[s[i+1]]) {
                val = val * -1
            }
        }
        count = count + val
    }

    return count;
};