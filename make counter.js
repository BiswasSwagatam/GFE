export default function makeCounter(initialValue = 0) {
  const count = initialValue === undefined ? 0 : initialValue;

  return function () {
    const currentValue = count;
    count++;
    return currentValue;
  };
}
