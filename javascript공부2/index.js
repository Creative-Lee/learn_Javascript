let nameArr = [
  {name: 'Lee'},
  {name: 'Kim'},
  {name: 'Park'},
  {name: 'Lee'},
]
let filterdByName = nameArr.filter(item => item.name === 'Lee') 

console.log(filterdByName) // {name: 'Lee'}
console.log(nameArr.findIndex(item => item.name = 'Lee')) // 0