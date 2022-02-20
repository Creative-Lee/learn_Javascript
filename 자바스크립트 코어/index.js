let head = null // node obj
let current = null // node obj
// let size = 0; ---> getSize 메소드 구현으로 필요 없어짐

function add(value) {
  if(head == null){
    head = {
      value: value,
      next: null
    }
    return
  }

  let tailNode ={
    value: value,
    next: null
  }

  current = head // head에서부터 탐색시작

  while(current.next != null){
    current = current.next // 현재노드가 마지막 노드가 아니면 다음노드 탐색
  }  
  
  current.next = tailNode; // 새 노드 생성, 현재노드의 다음 노드로 이어줌
}

function addAt(value,index){
  current = head;

  let newNode = {
    value: value,
    next: null
  }

  /*맨 뒤에 추가할 경우*/
  if(getSize() <= index){  
    add(value);
    return
  }  

  /*맨 앞에 추가 할 경우*/
  if(index === 0){            
    newNode.next = current   
    head = newNode;         
    return
  }

  /*중간에 추가할 경우*/
  for(let i= 0; i < index; i++){ 

    if(i === index-1){            
      newNode.next = current.next 
      current.next = newNode     
      return
    }

    current = current.next;     // head부터 한칸씩 탐색
  } 
}

function remove(value){
  current = head;

  for(let i= 0; i < getSize(); i++){
    
  }
  
}

function get(index){
  if(getSize() <= index){ //사이즈보다 크거나 같은 인덱스를 요구하면 없어요!
    return undefined;
  }

  current = head;

  for(let i = 0; i < index ; i++){
    current = current.next;
  }

  return current.value;
}

function getSize(){
  current = head;
  let size = 0;
  
  while(current != null){
    size += 1
    current = current.next
  }
  current = head;
  return size;
}

function printAllNode(){
  current = head;

  while(current != null) {
    console.log(current);
    current = current.next;
  }
  current = head;
}

addAt(1,2)
addAt(2,2)
addAt(3,2)
printAllNode()