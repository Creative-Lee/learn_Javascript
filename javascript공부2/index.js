let pw = Symbol('pw')

let user = {
  name: 'Kim',
  id : 'go heaven',
  [pw] : 1234
}

for(let key in user) {
  console.log(`${key} : ${user[key]}`)
}

console.log(Object.keys(user)) // ['name', 'id']
