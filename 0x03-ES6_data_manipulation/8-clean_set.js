export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const filteredSet = [...set].filter((elements) => elements.startsWith(startString))
    .map((elements) => elements.slice(startString.length));
  return filteredSet.join('-');
}
