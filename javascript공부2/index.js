<<<<<<< Updated upstream
let sum = 0;
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

for(let key in salaries){
	sum += salaries[key]
}
=======
let info = {
  boy : {
    isGood : true,
    isPretty : false,
  },
  girl : {
    isGood : true,
    isPretty : true,
  }
}

let clone = {...info}

clone.boy.isGood = false

console.log(info.boy.isGood)  //false
console.log(clone.boy.isGood)  //false
>>>>>>> Stashed changes
