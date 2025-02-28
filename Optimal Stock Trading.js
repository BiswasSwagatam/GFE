export default function optimalStockTrading(prices) {
  let buy = prices[0];
  let profit = 0;

  // for(let i=0; i<prices.length-1; i++){
  //   let currentValue = prices[i]
  //   for(let j=i+1; j<prices.length; j++){
  //     let currentProfit = prices[j] - currentValue
  //     profit = Math.max(profit, currentProfit)
  //   }
  // }

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buy) {
      buy = prices[i];
    } else if (prices[i] - buy > profit) {
      profit = prices[i] - buy;
    }
  }

  return profit;
}
