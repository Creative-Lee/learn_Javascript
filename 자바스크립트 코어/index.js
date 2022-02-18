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
  if(getSize() <= index){  //사이즈랑 같거나 큰 인덱스에 값 추가 --> 맨 뒤에 추가
    add(value);
    return
  }

  current = head;

  let newNode = {
    value: value,
    next: null
  }
  
  for(let i= 0; i < index; i++){ //원하는 인덱스 == 탐색 횟수
    if(i == index - 1){         // 탐색중에 원하는 이전 인덱스를 만나면
      current.next = newNode;
    }
    
    current = current.next;
  }
  
  newNode.next = current;

  // 미완성 분기 쪼개서 다시 만들기 ex) head 값이 변할 때도 처리해야함
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

  return size;
}

function showAllNode(){
  current = head;

  while(current != null) {
    console.log(current);
    current = current.next;
  }
}

add(1)
addAt(2,0)

console.log(showAllNode())