export default function guardrail(mathFunction) {
  const myQueue = [];
  try {
    myQueue.push(mathFunction());
  } catch (err) {
    myQueue.push(err.toString());
  } finally {
    myQueue.push('Guardrail was processed');
  }
  return queue;
}
