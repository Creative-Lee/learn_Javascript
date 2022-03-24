let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250,
  "Lee" : 300
};

function topSalary(salaries){
  if(!salaries){
    return null
  }

  let max = 0
  let topSalaryMan

  for(let [name,salary] of Object.entries(salaries)){
    if(max <= salary){
      topSalaryMan = name
      max = salary;
    }    
  } 
  
  return topSalaryMan
}

console.log(topSalary(salaries))