function unique(strArr) {
  let finalArray = [];

  for(let str of strArr){
    if(!finalArray.includes(str)){
      finalArray.push(str)
    }
  }

  return finalArray
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
]

console.log(unique(strings)) 