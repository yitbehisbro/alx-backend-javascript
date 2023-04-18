export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const output = mathFunction();
    queue.push(output);
  } catch (error) {
    queue.push('Error: cannot divide by 0');
  }
  queue.push('Guardrail was processed');
  return queue;
}
