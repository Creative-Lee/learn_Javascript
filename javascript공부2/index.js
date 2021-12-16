function relation(teacher, student) {
	teacher.student = student;
	student.teacher = teacher;

	return {
		sky: teacher,
		ground : student
	}
}
let teacherAndStudent = relation({name: 'An'},{name: 'Lee'})

delete teacherAndStudent.ground
delete teacherAndStudent.sky.student

console.log(teacherAndStudent)	// {sky: {name: 'An'}}
console.log(teacherAndStudent.sky)	// {name: 'An'}
console.log(teacherAndStudent.ground)	// undefined
