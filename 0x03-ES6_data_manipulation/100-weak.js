const endpointCounts = new WeakMap();

export function queryAPI(endpoint) {
  let count = endpointCounts.get(endpoint) || 0;
  count += 1;

  if (count >= 5) {
    throw new Error('Endpoint load is high');
  } else {
    endpointCounts.set(endpoint, count);
  }
}
