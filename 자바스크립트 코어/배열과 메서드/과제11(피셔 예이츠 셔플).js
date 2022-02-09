function shuffle(array){
  for(let i = array.length - 1; i > 0; i--){
    let randomIndex = Math.floor(Math.random() * (i + 1))
    let deletedElement = array.splice(randomIndex,1)
    array.push(deletedElement[0])
    
  //   let j = Math.floor(Math.random() * (i + 1));
  //  [array[i], array[j]] = [array[j], array[i]];
  }
}

// 1, 2, 3으로 만들 수 있는 모든 순열의 빈도를 세줍니다.
let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '321': 0,
  '231': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

// 만들 수 있는 모든 순열의 생성 빈도를 세서 출력해줍니다.
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}
// let j = Math.floor(Math.random() * (2 + 1))
// console.log(j)
