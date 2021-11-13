  const fetchNumber = new Promise((resolve, reject)=>{
    console.log("여러분 패치 넘버 프로미스가 생성됐습니다.")
    setTimeout(()=>{
      resolve(1)} ,1000)
  })

  fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=> resolve(num - 1),1000)
    })
  })
  .then(num => console.log(num))
  .finally(()=> console.log("계산 끝"))



