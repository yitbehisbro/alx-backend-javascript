export default function taskBlock(trueOrFalse) {
  if (trueOrFalse) {
    task = true;
    task2 = false;
  }
  task = false;
  task2 = true;
  var task;
  var task2;

  return [task, task2];
}
