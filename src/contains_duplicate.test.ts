import containsDuplicate from './contains_duplicate';
/*
Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.
*/
test('test case 1', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('test case 2', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('test case 3', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
