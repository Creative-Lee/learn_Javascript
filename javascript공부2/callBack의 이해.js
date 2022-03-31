//fucking bad code
  class UserStorage {
    loginUser(id,pw,onSuccess,onError) {
      setTimeout(()=>{
        if((id === 'ellie' && pw === 'dream')||(id === 'coder' && pw ==='academy')){
          onSuccess(id);
        }
        else{
          onError(new Error('not found'));
        }},2000);
    }

    getRoles(user,onSuccess,onError) {
      setTimeout(()=>{
        if(user ==='ellie'){
          onSuccess({name:"ellie", role: 'admin'})
        }
        else{
          onError(new Error('no access'));
        }},2000);
    }
  }

  const userStorage = new UserStorage();
  const id = prompt('아이디치셈')
  const pw = prompt('패스워드치셈')

  userStorage.loginUser(
    id,
    pw,
    user=>{userStorage.getRoles(
      user,
      userWithRole=>{alert(`hello ${userWithRole.name}, you are ${userWithRole.role}`)},
      error=>{console.log(error)})},
    error=>{console.log(error)}
  );