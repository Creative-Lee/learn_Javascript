class Member{
  constructor(firstName , lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = `${firstName} ${this.lastName}`
  }
  
  get fullName(){
    return `${this.firstName} ${this.lastName}`.toUpperCase()
  }
  set fullName(value){
    [this.firstName, this.lastName] = value.split(" ");
  }

  speak(){
    console.log(`Hello! ${this.fullName}!`)
  }
}

const 이도현 = new Member("dohyeun","lee")


console.log(이도현.firstName)
console.log(이도현.lastName)
console.log(이도현)



