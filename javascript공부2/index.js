function relation(teacher, student) {
  teacher.student = student;
  student.teacher = teacher;

  return {
    sky : teacher,
    ground : student
  }  
}

console.log(relation({name:'An'},{name:'Lee'})) 

