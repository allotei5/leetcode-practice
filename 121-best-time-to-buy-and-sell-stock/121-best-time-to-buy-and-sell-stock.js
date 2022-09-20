/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let buy=0
    let currentProfit = 0
    for(let sell=1; sell<prices.length; sell++) {
        if(prices[sell]>prices[buy]) {
            if((prices[sell]-prices[buy]) > currentProfit) {
                currentProfit = prices[sell] - prices[buy]
            }
        }else {
            buy = sell
        }
    }
    if(currentProfit > 0) {
        return currentProfit
    }
    return 0;
};