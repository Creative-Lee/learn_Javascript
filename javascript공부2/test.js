const sum = require('./sum')

describe('sum함수의 2가지 기능', () => {
  describe('n1 + n2 의 값을 리턴합니다.',() => {
    let testSum = (n1, n2) =>{

      let result = n1 + n2
  
      test(`${n1}과 ${n2}를 더하면 ${result}입니다.`, () => {
        expect(sum(n1, n2)).toBe(result)
      });
    }  
  
    for(let i = 0; i < 5; i++){
      let n1 = i
      let n2 = i + 1
  
      testSum(n1, n2); 
    }
  })
  
  describe('n1이나 n2에 음수가 할당되면 NaN을 리턴합니다.',() => {
    let testNaN = (n1, n2) =>{    
  
      test(`${n1}, ${n2} 둘 중 하나 라도 음수면 NaN 입니다.`, () => {
        expect(sum(n1, n2)).toBeNaN()
      });
    }  
  
    for(let i = 0; i > -5; i--){
      let n1 = i
      let n2 = i - 1
  
      testNaN(n1, n2); 
    }
  })
})




