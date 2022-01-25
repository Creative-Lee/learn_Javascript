let arr = [1, -2, 3 , 4]

function getMaxSubSum(arr){
  let sumSubArr =  arr[0] ;

  for(let i = 0; i < arr.length; i++){
    for(let j = 1; j < arr.length; j++){
      sumSubArr < arr[i] + arr[j] + arr[j+1]      //여기부터
    }    
  }

  return sumSubArr
}

console.log(getMaxSubSum(arr))