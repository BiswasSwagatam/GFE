var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let left = 0;
  let maxLen = 0;

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }
    set.add(s[right]);
    let len = right - left + 1;
    maxLen = Math.max(len, maxLen);
  }
  return maxLen;
};
