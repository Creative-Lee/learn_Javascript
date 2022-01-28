let arr = [1, 2, NaN]

console.log(arr.indexOf(NaN,0)) // -1
console.log(arr.lastIndexOf(NaN,2)) // -1
console.log(arr.includes(NaN,0)) // true