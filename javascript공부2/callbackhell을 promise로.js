class UserStorage {
    
  loginUser(id,pw){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      if((id==='이도현 '&& pw === '이도현')||(id==='coder'&& pw ==='academy')){
        resolve(id);
      }
      else{
        reject(new Error('not found'));
      }},2000)
    })
  }

  getRoles(user) {
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
      if(user==='이도현'){
        resolve({name:"이도현", role: 'admin'})
      }
      else{
        reject(new Error('no access'));
      }},2000)
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('아이디치셈')
const pw = prompt('패스워드치셈')

userStorage
.loginUser(id,pw)
.then(userStorage.getRoles)    
.then(roleObj => console.log(`당신의 이름은 ${roleObj.name} 당신의 역할은 ${roleObj.role}입니다.` ))
.catch(console.log)    


