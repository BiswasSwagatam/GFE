export default function selectionSort(arr) {
  let index = 0;
  while (index < arr.length - 1) {
    let smallestIndex = index;
    for (let i = index + 1; i < arr.length; i++) {
      if (arr[smallestIndex] > arr[i]) {
        smallestIndex = i;
      }
    }
    let temp = arr[index];
    arr[index] = arr[smallestIndex];
    arr[smallestIndex] = temp;
    index++;
  }
  return arr;
}
