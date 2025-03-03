var findMedianSortedArrays = function (nums1, nums2) {
  let merged = [];
  let m = nums1.length;
  let n = nums2.length;
  let i = 0,
    j = 0,
    k = 0;

  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      merged[k++] = nums1[i++];
    } else {
      merged[k++] = nums2[j++];
    }
  }

  while (i < m) {
    merged[k++] = nums1[i++];
  }

  while (j < n) {
    merged[k++] = nums2[j++];
  }

  let mergedLength = merged.length;
  let median;

  if (mergedLength % 2 == 0) {
    let mid = Math.floor(mergedLength / 2);
    median = (merged[mid - 1] + merged[mid]) / 2;
  } else {
    let mid = Math.floor(mergedLength / 2);
    median = merged[mid];
  }
  return median;
};
