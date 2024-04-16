function productExceptSelf(nums: number[]): number[] {
  const result = new Array<number>();

  let firstHalfProduct = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] = firstHalfProduct;
    firstHalfProduct *= nums[i];
  }
  let secondHalfProduct = 1;
  for (let j = nums.length - 1; j >= 0; j--) {
    result[j] *= secondHalfProduct;
    secondHalfProduct *= nums[j];
  }
  return result;
}

export default productExceptSelf;
