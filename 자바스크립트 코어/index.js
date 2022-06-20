class User {
  constructor(name){
    this.name = name
  }

  hi(){
    console.log(`hello ${this.name}`)
  }

  classFieldHi = () =>{  // class field 
    console.log(`hello ${this.name}`)
  }
}

let user1 = new User('Bob');

console.log(User.prototype) // { constructor: ƒ, hi: ƒ }
console.log(user1) // { name: 'Bob', classFieldHi: ƒ }

setTimeout(user1.hi, 1000) // hello 
// 위 경우에는 this는 window 입니다.
// window.name 은 존재하지 않습니다.

setTimeout(user1.classFieldHi, 1000) // hello Bob
// classFieldHi = () => { ... } 은 각 인스턴스에 독립적인 함수를 만듭니다.
// 함수의 this를 class 객체에 바인딩시켜줍니다.
// 원하는 결과를 얻을 수 있습니다.