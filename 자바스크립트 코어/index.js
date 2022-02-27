let headNode = null // node obj
let tailNode = null // node obj
let size = 0;

function addFirst(value) {

  let newNode = {
    value,
    prev : null,
    next : null
  }

  if(headNode == null){
    headNode = newNode; 
    tailNode = newNode;
    size++;
    return
  }

  headNode.prev = newNode;
  newNode.next = headNode;
  headNode = newNode;
  size++;
}

function addLast(value){

  let newNode = {
    value,
    prev : null,
    next : null
  }

  if(headNode == null){
    headNode = newNode; 
    tailNode = newNode;
    size++;
    return
  }

  tailNode.next = newNode;
  newNode.prev = tailNode;
  tailNode = newNode;
  size++;
}

function addAt(value,index){   
  let newNode = {
    value,
    prev : null,
    next : null
  }

  let lastIndex = size

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }  

  if(headNode == null){
    headNode = newNode; 
    tailNode = newNode;
    size++;
    return
  }
  
  if(index === 0){
    addFirst(value)
    return
  }

  if(index === size){
    addLast(value)
    return
  }

  let currentNode = headNode;
  let prevNode = null;

  for(let i = 0; i < index; i++){
    currentNode = currentNode.next;
    prevNode = currentNode.prev;
  }
  
  prevNode.next = newNode;
  newNode.next = currentNode;
  currentNode.prev = newNode
  newNode.prev = prevNode;
  size++;  
}

function remove(value){  
  if(headNode == null){
    console.log('노드가 없습니다.')
    return
  }

  let lastIndex = size
  let currentNode = headNode;
  let targetIndex = null;

  for(let i = 0; i < lastIndex ; i++){
    if(currentNode.value == value){
      targetIndex = i;
      break;
    }

    currentNode = currentNode.next;
  }

  if(targetIndex == null){
    console.log(`${value}를 찾을 수 없습니다.`)
    return
  }

  removeAt(targetIndex);
}

function removeAt(index){
  if(headNode == null){
    console.log('노드가 없습니다.')
    return
  }

  let lastIndex = size - 1;

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }

  let currentNode = headNode;
  let prevNode = null;

  if(index === 0){
    headNode = currentNode.next;
    size--;
    return
  }

  if(index == lastIndex){
    tailNode = tailNode.prev;
    tailNode.next = null;
    size--;
    return
  }

  for(let i = 0; i < index ; i++){
    currentNode = currentNode.next;
    prevNode = currentNode.prev;
  }

  prevNode.next = currentNode.next
  currentNode.next.prev = prevNode
  size--
}

function get(index){
  
  let lastIndex = size - 1;

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }

  let currentNode = headNode; 

  for(let i = 0; i < index ; i++){
    currentNode = currentNode.next;
  }

  return currentNode
}

function isEmpty(){
  return headNode == null
}

function printAllNode(){
  let currentNode = headNode;

  while(currentNode != null){
    console.log(currentNode)
    currentNode = currentNode.next
  }
  console.log('headNode: ',headNode)
  console.log('tailNode: ',tailNode)
  console.log(`size: ${size}`)
}
