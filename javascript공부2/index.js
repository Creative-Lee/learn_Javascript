let sumInput = () => {
  let numArr = [];
  let sumNum;

  let getNum = +prompt('숫자를 입력하시오')
  
  numArr.push(getNum);

  for(let number of numArr){
    sumNum =+ number
  }

  return sumNum;
}