export default function debounce(func, wait) {
  let timeoutId = null;
  return function (...args) {
    const context = this;
    clearTimeout(timeoutId);

    timeoutId = setTimeout(function () {
      func.apply(context, args);
    }, wait);
  };
}
