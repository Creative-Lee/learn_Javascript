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

  let newNode ={
    value: value,
    next: null
  }

  current = head // head에서부터 탐색시작

  while(current.next != null){
    current = current.next // 현재노드가 마지막 노드가 아니면 다음노드 탐색
  }
  
  current.next = newNode; // 새 노드 생성, 현재노드의 다음 노드로 이어줌
}

function addAt(value,index){
  current = head;
  let size = getSize()

  let newNode = {
    value: value,
    next: null
  }

  /*맨 뒤에 추가할 경우*/
  if(size == index){  
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
      break
    }

    current = current.next;     // head부터 한칸씩 탐색
  } 
}

function remove(value){  
  current = head;
  let i = 0;
  let targetIndex = null;

  while(current != null){
    if(current.value == value){
      targetIndex = i;
      break
    }

    current = current.next;
    i++;
  }

  if(targetIndex == null){
    console.log('삭제할 value를 찾을 수 없습니다.')
    return
  }

  removeAt(targetIndex)
}

function removeAt(index){
  current = head;

  if(current == null){
    console.log('노드가 없습니다.')
    return
  }

  let size = getSize();
  
  /*맨 앞을 삭제 할 경우*/
  if(index === 0){
    head = current.next
    return
  }

  /*맨 뒤를 삭제 할 경우*/
  if(size - 1 == index){

    while(current.next.next != null){
      current = current.next
    }

    current.next = null;
    return
  }

  /*중간을 삭제 할 경우*/
  if(index < size){

    for(let i = 0; i < index ; i++){

      if(i == index - 1){
        current.next = current.next.next
        return
      }     
      
      current = current.next;      
    }  
  }  
}

function get(index){
  if(getSize() <= index){ 
    console.log(`index에 해당하는 node가 없습니다. 노드의 총 갯수는 ${getSize()} 입니다.`)
    return
  }

  current = head;

  for(let i = 0; i < index ; i++){
    current = current.next;
  }

  return current
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

function isEmpty(){
  return head == null
}

function printAllNode(){
  current = head;

  while(current != null) {
    console.log(current);
    current = current.next;
  }  
  current = head;
}


