function buySellStock(prices: number[]): number {
  let minPrice = prices[0];
  let maxProfit = 0;
  for (const price of prices) {
    const profit = price - minPrice;
    if (price < minPrice) minPrice = price;
    if (profit > maxProfit) maxProfit = profit;
  }
  return maxProfit;
}

export default buySellStock;
