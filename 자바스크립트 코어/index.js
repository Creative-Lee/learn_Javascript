var a = {};
var func = function(b) {
  b = (b.a=1);
  b.b = 2;
}
func(a); // var a = { a: 1 , b: 2 }
console.log(a); // ??