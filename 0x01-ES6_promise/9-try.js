export default async function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(await mathFunction());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
