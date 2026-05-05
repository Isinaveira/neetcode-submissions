class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let buyPrice = prices[0];
        for (let i = 1; i<prices.length; i ++){
            if(prices[i]>buyPrice){
                
                const profit = prices[i] - buyPrice;
                maxProfit = (profit > maxProfit)? profit : maxProfit;
            }else{
                buyPrice = prices[i];
            }
        }

        return maxProfit;
    }
}
