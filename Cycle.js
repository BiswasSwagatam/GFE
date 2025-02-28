export default function cycle(...values) {
  let index = 0;

  return function () {
    if (values.length == 0) {
      return undefined;
    }

    let currentValue = values[index];
    index = (index + 1) % values.length;
    return currentValue;
  };
}
