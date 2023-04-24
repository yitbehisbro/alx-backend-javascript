export default function groceriesList() {
  const name = ['Apples', 'Tomatoes', 'Pasta', 'Rice', 'Banana'];
  const quantity = [10, 10, 1, 1, 5];

  const map = new Map();
  for (let i = 0; i < name.length; i += 1) {
    map.set(name[i], quantity[i]);
  }
  return map;
}
