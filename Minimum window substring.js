var minWindow = function (s, t) {
  let setT = new Map();
  let left = 0;
  let minL = Infinity;
  let ansLeft = 0;
  let count = t.length;

  for (const ch of t) {
    setT.set(ch, (setT.get(ch) || 0) + 1);
  }

  for (let right = 0; right < s.length; right++) {
    if ((setT.get(s[right]) || 0) > 0) {
      count--;
    }

    setT.set(s[right], (setT.get(s[right]) || 0) - 1);

    while (count == 0) {
      if (right - left + 1 < minL) {
        minL = right - left + 1;
        ansLeft = left;
      }

      setT.set(s[left], (setT.get(s[left]) || 0) + 1);
      if ((setT.get(s[left]) || 0) > 0) {
        count++;
      }
      left++;
    }
  }

  return minL == Infinity ? "" : s.substring(ansLeft, ansLeft + minL);
};
