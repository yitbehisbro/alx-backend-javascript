export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  const iterator = reportWithIterator[Symbol.iterator]();
  let result = iterator.next();

  while (!result.done) {
    employees += `${result.value} | `;
    result = iterator.next();
  }
  return employees.slice(0, -3);
}
