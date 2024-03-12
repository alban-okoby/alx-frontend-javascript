export default function updateStudentGradeByCity(studentList, city, newGrades) {
  if (!Array.isArray(studentList) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    return [];
  }

  return studentList
    .filter(student => student.location === city)
    .map(student => {
      const gradeObject = newGrades.find(grade => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';
      return { ...student, grade };
    });
}
