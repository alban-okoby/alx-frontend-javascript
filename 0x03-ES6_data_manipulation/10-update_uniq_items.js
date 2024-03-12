export default function updateUniqueItems(inputMap) {
  const updatedMap = new Map();

  if (inputMap instanceof Map) {
    for (const [key, value] of inputMap) {
      if (value === 1) {
        updatedMap.set(key, 100);
      } else {
        updatedMap.set(key, value);
      }
    }
  } else {
    throw new Error('Cannot process');
  }

  return updatedMap;
}
