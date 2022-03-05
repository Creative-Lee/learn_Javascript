function change(value , ref1 , ref2){
  value += value
  ref1.name = 'changed'
  ref2 = { name : 'changed' }
}

var number = 1;
var object1 = { name : 'change me plz'};
var object2 = { name : 'change me plz'};

change(number,object1,object2)

console.log(number) // 1
console.log(object1) // {name: 'changed'}
console.log(object2) // {name: 'change me plz'}