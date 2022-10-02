let say ={
  say(msg){
    console.log(msg)
  }
}

let sayHelloMixin = {
  __proto__: say,

  sayHello(){
    super.say(`hello ${this.name}`)
  }
}

class User {
  constructor(name){
    this.name = name;
  }
}

Object.assign(User.prototype, sayHelloMixin);

new User('Bob').sayHello(); // 'Hello Bob'