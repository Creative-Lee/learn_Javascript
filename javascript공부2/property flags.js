let user = {
  firstName: "Lee",
  lastName: "Do",
  get fullName(){
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value){
    [this.firstName,this.lastName] = value.split(" ");
  }
};
console.log(user.fullName)

let 설명자1 = Object.getOwnPropertyDescriptor(user, 'fullName');
console.log(설명자1);
Object.defineProperty(user, 'hiddenName', {
  get(){
    return this._hiddenName;
  },
  set(value){
    this._hiddenName = value;
  } })
user.hiddenName = 'DDDDD';
console.log(user.hiddenName)


