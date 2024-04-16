import productExceptSelf from './product_of_array_except_self';

const eliminateNegativeZero = (arr: number[]): number[] => {
  // eslint-disable-next-line no-compare-neg-zero
  return arr.map(num => (num === -0 ? 0 : num));
};

test('test case 1', () => {
  const testCase = productExceptSelf([1, 2, 3, 4]);
  expect(eliminateNegativeZero(testCase)).toEqual([24, 12, 8, 6]);
});

test('test case 2', () => {
  const testCase = productExceptSelf([-1, 1, 0, -3, 3]);
  expect(eliminateNegativeZero(testCase)).toEqual([0, 0, 9, 0, 0]);
});
