export default function throttle(func, wait) {
  let timeLastCalled = 0;
  let timeoutId;

  return function (...args) {
    let now = Date.now();
    let timeSinceLAstcalled = now - timeLastCalled;

    if (timeSinceLAstcalled >= wait) {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
      func.apply(this, args);
      timeLastCalled = now;
    } else if (!timeoutId) {
      timeoutId = setTimeout(() => {
        func.apply(this, args);
        timeLastCalled = Date.now();
        timeoutId = null;
      }, wait - timeSinceLAstcalled);
    }
  };
}
