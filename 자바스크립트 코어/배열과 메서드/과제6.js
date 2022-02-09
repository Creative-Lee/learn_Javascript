function Calculator(){

  this.calculateMethods = {
    '+': (a,b) => a + b,
    '-': (a,b) => a - b
  }  

  this.calculate = str => {
    let splitStr = str.split(' ')
    let a = +splitStr[0]
    let operator = splitStr[1] 
    let b = +splitStr[2]

    if(!this.calculateMethods[operator] || isNaN(a) || isNaN(b)){
      return NaN
    }

    return this.calculateMethods[operator](a,b)
  }

  this.addMethod = (operator, method) => {
    this.calculateMethods[operator] = method    
  }
}

let calc = new Calculator()
console.log(calc.calculate('1 - 5'))
calc.addMethod('*',(a, b) => a * b)

console.log(calc.calculate('1 * 5'))