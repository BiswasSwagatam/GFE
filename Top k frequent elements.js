var topKFrequent = function (nums, k) {
  const n = new Map();

  for (const num of nums) {
    n.set(num, (n.get(num) || 0) + 1);
  }

  const sorted = Array.from(n.entries()).sort((a, b) => b[1] - a[1]);

  return sorted.slice(0, k).map((a) => a[0]);
};
