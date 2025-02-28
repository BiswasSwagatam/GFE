Array.prototype.myReduce = function (callbackFn, initialValue) {
  if (this === null || this === undefined) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callbackFn !== "function") {
    throw new TypeError(callbackFn + " is not a function");
  }

  const array = Object(this);
  const length = array.length >>> 0;
  let accumulator = initialValue;
  let startIndex = 0;

  if (initialValue === undefined) {
    if (length === 0) {
      throw new TypeError("Reduce of empty array with no initial value");
    }
    accumulator = array[0];
    startIndex = 1;
  }

  for (let i = startIndex; i < length; i++) {
    if (i in array) {
      accumulator = callbackFn(accumulator, array[i], i, array);
    }
  }

  return accumulator;
};
