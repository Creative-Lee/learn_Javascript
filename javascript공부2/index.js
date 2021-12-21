
let calculator = {
  num1 : null,
  num2 : null,

  read(){
    this.num1 = +prompt('숫자1',"1")
    this.num2 = +prompt('숫자2',"2")
  },

  sum(){
    return this.num1 + +this.num2
  },
  mul(){
    return this.num1 * this.num2
  }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );
