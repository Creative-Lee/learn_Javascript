let headNode = null // node obj
let tailNode = null // node obj
let size = 0;

function addFirst(value) {

  let newNode = {
    value,
    prev : null,
    next : null
  }

  if(!headNode){
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

function add(value){

  let newNode = {
    value,
    prev : null,
    next : null
  }

  if(!headNode){
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

  if(!headNode){
    headNode = newNode; 
    tailNode = newNode;
    size++;
    return
  }
  
  if(index === 0){
    add(value)
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
  if(size == 0){
    console.log('노드가 없습니다.')
    return
  }

  let currentNode = headNode;
  let indexOfValue = null;

  for(let i = 0; i < size ; i++){
    if(currentNode.value == value){
      indexOfValue = i;
      break;
    }
    
    currentNode = currentNode.next;
  }

  if(indexOfValue == null){
    console.log(`${value}를 찾을 수 없습니다.`)
    return
  }

  removeAt(indexOfValue);
}

add(0)
add(1)
add(2)
removeAt(0)
printAllNode()

function removeAt(index){
  if(size == 0){
    console.log('노드가 없습니다.')
    return undefined
  }

  let lastIndex = size - 1;

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }
  
  if(index === 0){ 
    return shift();
  }

  if(index == lastIndex){
    tailNode = tailNode.prev;
    tailNode.next = null;
    size--;
    return
  }

  const removedNode = get(index)
  const beforeNode = removedNode.prev
  const afterNode = removedNode.next

  beforeNode.next = afterNode;
  afterNode.prev = beforeNode;
  size--;

}

function shift(){
  if(size == 0){
    console.log('노드가 없습니다.')
    return
  }

  let shiftedNode = headNode;

  if(size == 1){
    headNode = null;
    tailNode = null;
  }
  else{
    headNode = headNode.next;
    headNode.prev = null;
    shiftedNode.next = null;
  }
  
  size--;
  return shiftedNode  
}

function get(index){
  
  let lastIndex = size - 1; 

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }
  
  let currentNode;
  let indexCount;
  
  if(index <= (lastIndex / 2)){ 
    currentNode = headNode;
    indexCount = 0;  

    while(indexCount != index){
      currentNode = currentNode.next;
      indexCount++;
    }
  
  }  
  else{
    currentNode = tailNode;
    indexCount = lastIndex;
  
    while(indexCount != index){
      currentNode = currentNode.prev;
      indexCount--;
    }
  }

  return currentNode
}


function isEmpty(){
  return size == 0;
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

