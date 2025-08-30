const prices = [7, 1, 5, 3, 6, 4];

const findBestTimeToBuyStocks = (prices) => {
  let min = prices[0];
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min;
    }
    if (prices[i] < min) {
      min = prices[i];
    }
  }

  return maxProfit;
};

console.log(findBestTimeToBuyStocks(prices));
console.log(findBestTimeToBuyStocks([7, 6, 4, 3, 2, 1]));
