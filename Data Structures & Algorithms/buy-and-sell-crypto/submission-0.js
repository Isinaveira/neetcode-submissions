class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxSellPrice = prices[0];
        let maxProfit = 0;
        let buyPrice = prices[0];
        for (let i = 1; i<prices.length; i ++){
            if(prices[i]>buyPrice){
                maxSellPrice=prices[i];
                const profit = maxSellPrice - buyPrice;
                maxProfit = (profit > maxProfit)? profit : maxProfit;
            }else{
                buyPrice = prices[i];
            }
        }

        return maxProfit;
    }
}
