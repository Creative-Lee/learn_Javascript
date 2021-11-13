const numArr = [0,1,2,3,4,5,6,7,8,9,10];
const evenNumFilter = numArr => numArr.filter(num => num % 2 === 0) 
const byeZero = arr => arr.filter(num => num !== 0 )

const numberChecker = () => 
  new Promise((resolve, reject)=>{
  console.log(`numberChecker Promise입니다! 3초뒤에 서버로부터 numArr를 받아와 계산을 시작합니다!`)
  setTimeout(()=>{
    resolve(numArr)
    reject(new Error("당신. 오류를 범했습니다."))
  },3000)
})

const welcome = () => 
new Promise((resolve, reject)=>{      
console.log("welcome Promise입니다! 3초뒤에 서버로부터 msg를 받아와 출력합니다!")
setTimeout(()=>{            
  resolve("여러분은 지금 Promise에서 또 다른 promise호출에 성공했습니다!!!!")
  reject(new Error("당신. 또 오류를 범했습니다."))
},3000)
})

numberChecker()//  
.then(numArr => (console.log("1단계 : numArr에서 짝수만 골라냅니다. (3초 소요)"),numArr))    
.then(numArr => new Promise((resolve, reject)=>{
setTimeout(() => resolve(evenNumFilter(numArr)),3000)
}))

.then(numArr => (console.log(numArr) , console.log("2단계 : 짝수numArr에서 0을 제거합니다.(3초 소요)"),numArr))
.then(numArr => new Promise((resolve, reject)=>{
setTimeout(() => resolve(byeZero(numArr)),3000)
}))

.then(numArr => console.log(`최종값은 ${numArr} 입니다! 3초뒤에 다음 promise를 호출합니다.`)) 
.then(() => new Promise((resolve, reject)=>{
setTimeout(() => resolve((welcome())),3000)
}))

.then(msg => console.log(msg))

.finally(()=>console.log(`고생하셨습니다.`))