var characterReplacement = function (s, k) {
  let charSet = {};
  let left = 0;
  let maxFreq = 0;
  let len = 0;

  for (let right = 0; right < s.length; right++) {
    charSet[s[right]] = (charSet[s[right]] || 0) + 1;
    maxFreq = Math.max(maxFreq, charSet[s[right]]);

    while (right - left + 1 - maxFreq > k) {
      charSet[s[left]] -= 1;
      left++;
    }

    len = Math.max(len, right - left + 1);
  }
  return len;
};
