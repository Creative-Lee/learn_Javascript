let dictionary = Object.create(null, {
  toString : {
    value : function(){
      return Object.keys(this).join()
    }
  }
});

// 데이터를 추가합니다.
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // __proto__는 여기서 일반적인 프로퍼티 키입니다.

// 반복문에는 apple과 __proto__ 만 있습니다.
for(let key in dictionary) {
  alert(key); // "apple" 다음 "__proto__"입니다.
}

alert(dictionary); // "apple,__proto__"