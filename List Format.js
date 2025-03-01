export default function listFormat(items, options) {
  if (!items || items.length == 0) {
    return "";
  }

  let processedItems = [...items];

  if (options && options.unique) {
    processedItems = Array.from(new Set(processedItems));
  }

  processedItems = processedItems.filter((item) => item !== "");
  if (!processedItems.length) {
    return "";
  }

  if (options && options.sorted) {
    processedItems = processedItems.sort();
  }

  if (
    options &&
    options.length &&
    options.length > 0 &&
    options.length < processedItems.length
  ) {
    const remainingCount = processedItems.length - options.length;
    const firstItems = processedItems.slice(0, options.length);

    if (firstItems.length == 0) {
      return "";
    }

    if (firstItems.length == 1) {
      return `${firstItems[0]} and ${remainingCount} others`;
    }

    if (remainingCount > 1) {
      return `${firstItems.slice(0, -1).join(", ")}, ${
        firstItems.slice(-1)[0]
      } and ${remainingCount} others`;
    } else {
      return `${firstItems.slice(0, -1).join(", ")}, ${
        firstItems.slice(-1)[0]
      } and ${remainingCount} other`;
    }
  }

  if (processedItems.length === 1) {
    return processedItems[0];
  }

  if (processedItems.length === 2) {
    return `${processedItems[0]} and ${processedItems[1]}`;
  }

  return `${processedItems.slice(0, -1).join(", ")} and ${
    processedItems.slice(-1)[0]
  }`;
}
