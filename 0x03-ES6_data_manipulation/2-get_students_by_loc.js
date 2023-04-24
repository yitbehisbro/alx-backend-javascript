export default function getStudentsByLocation(getListStudents, city) {
  const studentsLocation = getListStudents.filter((place) => place.location === city);
  return studentsLocation;
}
