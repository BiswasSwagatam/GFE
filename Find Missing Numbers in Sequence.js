export default function findMissingNumberInSequence(numbers) {
  const sortedNums = numbers.sort((a, b) => a - b);
  let missingValue;

  for (let i = 0; i <= numbers.length; i++) {
    if (!sortedNums.includes(i)) {
      missingValue = i;
    }
  }
  return missingValue;
}
