 //새로운 promise가 만들어지면 익스큐터콜백함수 (리졸브 , 리젝트) 는 바로 자동실행 됩니다.
  const promise = new Promise((resolve, reject) => {
    console.log("뭐든지 해봅시다");
    setTimeout(()=>{
        // resolve("도현")
        reject(new Error('정신 차리고 다시 쓰세요'));
    },2000);
  });

//사용하기  then , catch,  finally
  promise
    .then(value=>{console.log(value);})   //then의 콜백함수의 파라미터는 리졸브로 전달받은 값. ===도현
    .catch(error =>{console.log(error);}) // catch의 콜백함수의 파라미터는 리젝트로 전달받은 값. === Error 블라블라
    .finally(()=>{console.log("파이널리는 무저끈 출력됩니다.")})


  

