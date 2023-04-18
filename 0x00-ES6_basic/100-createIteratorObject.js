export default function createIteratorObject(report) {
  let index = 0;
  const employees = Object.values(report.allEmployees).reduce(
    (acc, department) => acc.concat(department),
    [],
  );

  return {
    next() {
      if (index < employees.length) {
        const value = employees[index];
        index += 1;
        return { value, done: false };
      }
      return { value: undefined, done: true };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
}
