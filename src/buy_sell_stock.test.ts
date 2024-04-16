/* Best Time to Buy and Sell Stock
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a
different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/
import buySellStock from './buy_sell_stock';

test('test case 1', () => {
  expect(buySellStock([7, 1, 5, 3, 6, 4])).toBe(5);
});

test('test case 2', () => {
  expect(buySellStock([7, 6, 4, 3, 1])).toBe(0);
});

test('test case 3', () => {
  expect(buySellStock([2, 3, 5, 1, 7])).toBe(6);
});
