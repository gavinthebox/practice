import productExceptSelf from './product_of_array_except_self';

/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except
nums[i].
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
You must write an algorithm that runs in O(n) time and without using the division operation.
*/

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
