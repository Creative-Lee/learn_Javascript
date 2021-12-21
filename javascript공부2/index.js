function Acc(initialValue){
  this.value = initialValue;

  this.read = () => {
    this.value += +prompt('숫자')
  }
}

let acc = new Acc(0)

acc.read()
acc.read()

console.log(acc.value)