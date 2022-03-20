var x = 'xxx';
var z = 'zzz';

function foo () {
  var y = 'yyy';   
  
  function bar () {
    var z = 'zzz';    
  }

  bar();

  console.log(x + y + z);
}

foo();
