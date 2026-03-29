/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
            let buy=prices[0];
        let sell=0;
        for(let i=1;i<prices.length;i++){
            if(prices[i]<buy){
                buy=prices[i]
            }else{
                sell=Math.max(sell,prices[i]-buy)
            }
            console.log(buy,sell)

        }
        return sell
};