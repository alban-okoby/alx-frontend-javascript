export default function cleanSet(inputSet, startString) {
  const itemList = [];

  if (
    typeof inputSet !== 'object'
    || typeof startString !== 'string'
    || startString.length === 0
  ) {
    return '';
  }

  for (const item of inputSet) {
    if (item && item.startsWith(startString)) {
      itemList.push(item.slice(startString.length));
    }
  }

  return itemList.join('-');
}
