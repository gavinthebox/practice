import containsDuplicate from './contains_duplicate';

test('test case 1', () => {
  expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
});

test('test case 2', () => {
  expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
});

test('test case 3', () => {
  expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
});
