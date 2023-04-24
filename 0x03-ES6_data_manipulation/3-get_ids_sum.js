export default function getStudentIdsSum(getListStudents) {
  const sumOfId = getListStudents.reduce((acc, obj) => acc + obj.id, 0);
  return sumOfId;
}
