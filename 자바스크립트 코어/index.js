class Article {
  static staticProp = 'staticProp';
  static staticMethod (){
    return 'staticMethod';
  }

  fieldProp = 'fieldProp'
  fieldMethod = () =>{
    return 'fieldMethod';
  }

  constructor(){
    this.constructorProp = 'constructorProp';
  }

  classMethod(){
    return 'classMethod';
  }
}

let article = new Article()

console.log( Article.staticProp ) // {constructor: ƒ, classMethod: ƒ}
console.log( article )

console.log( Article.prototype.constructor === Article )
// fieldProp: 'fieldProp', 
// fieldMethod: ƒ
// constructorProp: 'constructorProp',
