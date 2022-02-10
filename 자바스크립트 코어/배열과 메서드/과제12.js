function getAverageAge(arr){
  let ageArr = arr.reduce((sum,user)=>sum + user.age , 0)/arr.length;

  return ageArr
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

console.log(getAverageAge(arr));