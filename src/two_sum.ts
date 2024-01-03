//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

function twoSum(nums: number[], target: number) {
  const complements = new Map<number, number>();

  for (let i = 0; i <= nums.length; i++) {
    const complement = target - nums[i];
    if (complements.get(nums[i]) != undefined) {
      return [complements.get(nums[i]), i];
    }
    complements.set(complement, i);
  }
  throw 'This should be impossible';
}
export default twoSum;
