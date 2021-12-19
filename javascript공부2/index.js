<<<<<<< Updated upstream
function relation(teacher, student) {
	teacher.student = student;
	student.teacher = teacher;

	return {
		sky: teacher,
		ground : student
	}
=======
<<<<<<< HEAD
let calculator = {
  num1 : null,
  num2 : null,

  read(){
    this.num1 = +prompt('숫자1',"1")
    this.num2 = +prompt('숫자2',"2")
  },

  sum(){
    return this.num1 + +this.num2
  },
  mul(){
    return this.num1 * this.num2
  }
>>>>>>> Stashed changes
}
let teacherAndStudent = relation({name: 'An'},{name: 'Lee'})

<<<<<<< Updated upstream
delete teacherAndStudent.ground
delete teacherAndStudent.sky.student
=======
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
>>>>>>> Stashed changes

console.log(teacherAndStudent)	// {sky: {name: 'An'}}
console.log(teacherAndStudent.sky)	// {name: 'An'}
console.log(teacherAndStudent.ground)	// undefined
