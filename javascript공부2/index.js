let user1 = {
  name: 'John',
  grade : 100,

  toString(){
    return this.name
  },

  valueOf(){
    return this.grade
  }
}

alert(+user1)
