function extractCurrencyValue(str){
  return +(str.slice(1))
}

console.log(extractCurrencyValue(`$1420`))