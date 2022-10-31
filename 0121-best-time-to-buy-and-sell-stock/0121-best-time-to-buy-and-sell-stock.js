/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy = 0
    let currentProfit = 0
    
    for (let sell=1; sell<prices.length; sell++) {
        if (prices[sell] > prices[buy]) {
            let newProfit = prices[sell]-prices[buy]
            if (newProfit > currentProfit) {
                currentProfit = newProfit
            }
        }else {
            buy = sell
        }
    }
    
    return currentProfit
};