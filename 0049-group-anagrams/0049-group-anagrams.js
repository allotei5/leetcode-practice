/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let obj = {}
    let res = []
    
    strs.forEach((word) => {
        let sortedWord = word.split("").sort().join("");
        if (obj[sortedWord] === undefined) {
            obj[sortedWord] = [word]
        } else {
            obj[sortedWord].push(word)
        }
    })

    for (let key in obj) {
        res.push(obj[key])
    }
    return res
};