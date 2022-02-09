function filterRangeInPlace(arr,a,b){
  for(let i = 0; i< arr.length; i++){
  
    if(arr[i] < a || arr[i] > b){
      arr.splice(i,1)
      i-- // 요소를 제거했으니 반복이 진행된 횟수를 하나 줄여줘야함.
    }
  }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr,1,4)

console.log(arr)
