class CoffeeMachine {
  constructor(power) {
    this._power = power;
  }
  static waterAmount2 = 2
  _waterAmount = 0;
}

class MegaCoffeeMachine extends CoffeeMachine {
  test(){
    console.log(this._waterAmount)
  }
}

let mega = new MegaCoffeeMachine(200)

console.log(MegaCoffeeMachine.__proto__ === CoffeeMachine);
mega.test()