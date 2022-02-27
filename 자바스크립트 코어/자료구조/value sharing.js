'use strict'
let b = 3  // b라는 메모리주소1에  3을 넣음

function test(value) {  //test 함수를 선언하는데 , value 라는 매개변수가 필요함 메모리주소2 있음' \
  value = 4; //  value의 메모리주소2에 4를 넣은거임
}
test(b) // 메모리주소 1은 그대로 3임 
console.log(b) //3


let c = {
  name : 'test'
}

function test2(obj) {
  obj = [ 1, 'clear']
}

test2(c)
console.log(c)


