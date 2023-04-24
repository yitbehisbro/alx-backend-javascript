export default function getListStudentIds(funs) {
  if (!(funs instanceof Array)) {
    return [];
  }
  return funs.map((item) => item.id);
}
