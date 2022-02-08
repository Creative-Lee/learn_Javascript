function filterRange(arr,a,b){
  return arr.filter(num => (a <= num && num <= b) )
}

let arr = [5, 3, 8, 1];

console.log(filterRange(arr,2,9))
console.log(arr)