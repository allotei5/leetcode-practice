/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    let res = [intervals[0]]
    
    for (let i=1; i<intervals.length; i++) {
        let last = res[res.length-1]
        if (intervals[i][0] <= last[1]) {
            
            if (intervals[i][1] <= last[0]) {
                let newLast = []    
            }
            
            let newLast = [Math.min(last[0], intervals[i][0]), Math.max(last[1], intervals[i][1])]
            res[res.length-1] = newLast
        } else {
            res.push(intervals[i])
        }
    }
    
    return res
    
};