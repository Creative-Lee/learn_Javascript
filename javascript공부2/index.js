let sum = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

for(let key in salaries){
	sum += salaries[key]
}