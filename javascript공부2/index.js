let product = prompt('뭘 사고싶어요?','Computer')

const wishList = {
    [`want${product}`] : "computed property", // 대괄호 안에서 백틱 ( ``) 사용이 가능합니다.
    'want Computer' : "two word property"  // 백틱 ( `` )으로 대체할 수 없습니다 ㅠㅠ
}

console.log(wishList.wantComputer) // "computed property",
console.log(wishList["want Computer"]) // "two word property"