var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let max = 0;

  while (left < right) {
    let currHeight = Math.min(height[left], height[right]);
    let currArea = currHeight * (right - left);
    max = Math.max(max, currArea);
    if (height[left] > height[right]) {
      right--;
    } else {
      left++;
    }
  }
  return max;
};
