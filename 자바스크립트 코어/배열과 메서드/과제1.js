function camelize(str){
  return str
    .split('-')
    .map((word,index) => {
      if(index == 0){
        return word
      }
      else{
        return word[0].toUpperCase() + word.slice(1)
      }
    })
  .join('')
} 

console.log(camelize('-javascript-is-holy-shit'))
