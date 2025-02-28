export default function minBy(array, iteratee) {
  if (!array || array.length === 0) {
    return undefined;
  }

  let minElement = undefined;
  let minValue = undefined;
  let firstValidElementFound = false;

  for (const element of array) {
    const value = iteratee(element);

    if (value === null || value === undefined) {
      continue;
    }

    if (!firstValidElementFound) {
      minValue = value;
      minElement = element;
      firstValidElementFound = true;
    } else if (value < minValue) {
      minValue = value;
      minElement = element;
    }
  }

  return minElement;
}
