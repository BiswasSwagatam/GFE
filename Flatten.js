export default function flatten(value) {
  const res = [];

  function flatt(a) {
    for (let i = 0; i < a.length; i++) {
      if (Array.isArray(a[i])) {
        flatt(a[i]);
      } else {
        res.push(a[i]);
      }
    }
  }

  if (value) {
    flatt(value);
  }

  return res;
}
