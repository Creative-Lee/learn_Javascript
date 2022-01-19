let hello = `도현아 안녕~ 어 태훈아 안녕 어? 어~안녕~`

let pos = -1
while( (pos = hello.indexOf(`안녕` , pos + 1 )) != -1 ){
  console.log(pos)
} 
// 4 , 14 , 22


