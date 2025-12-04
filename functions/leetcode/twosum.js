/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let temp = target - nums[i];
    for (j = 0; j < nums.length; j++) {
      if (temp == nums[j] && i != j) {
        return (number = [i, j]);
      }
    }
  }
};
