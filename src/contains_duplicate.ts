function containsDuplicate(nums: number[]): boolean {
  const numsMap = new Map<number, number>();
  for (const num of nums) {
    if (numsMap.get(num)) return true;
    numsMap.set(num, 1)
  }
  return false;
}

export default containsDuplicate;
