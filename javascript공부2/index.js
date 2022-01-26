let arr = [1, -4, 3 , 4, -6 , -10]

function getMaxSubSum(arr){   
  let maxSubArrSum = 0  
  let subArrSum = 0
  
  for(let i = 0; i < arr.length; i++){  
    subArrSum += arr[i];

    if(0 > subArrSum){
      subArrSum = 0;
    }
    
    maxSubArrSum = Math.max(maxSubArrSum,subArrSum);
  } 

  return maxSubArrSum
}

console.log(getMaxSubSum(arr))