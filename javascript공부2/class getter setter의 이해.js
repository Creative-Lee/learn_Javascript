class User {
  constructor(firstName, lastName, age, sex){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.sex = sex;
  }
  get age(){
    return this._age
  }

  set age(value){
    this._age = value
  }
  get sex(){
    return this._sex
  }
  set sex(value){
    if(value!=='man'){
      console.log("you are not a man")
    }
    this._sex = value
  }
}
const user1 = new User('도현','리',10,'man');
console.log(user1,'새로운 유저의 탄생')
console.log(`유저의 성별 ${user1.sex}`);