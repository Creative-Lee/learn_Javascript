class Person {
  constructor(name, age) {  //기본 값 지정 name과 age라는 fields
    this.name = name;
    this.age = age;          
  }
  get age(){
    return this._age
  } 
  set age(value){
    if(value < 0){
      console.error("나이가 음수라니 말도 안돼!")
    }
    this._age = value;
  } 
  speak(){
      console.log(`hello ${this.name}! you are ${this.age} years old!`)
  }
}

const kim = new Person("kim" , -1);
kim.speak()

