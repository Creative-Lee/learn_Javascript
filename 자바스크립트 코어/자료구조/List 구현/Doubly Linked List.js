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
  let lastIndex = size

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }  

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
  
  if(index === 0){
    addFirst(value) // == unshift()
    return
  }

  if(index === lastIndex){
    add(value) // == push()
    return
  }

  const currentNode = get(index)
  const beforeNode = currentNode.prev;  
  
  beforeNode.next = newNode;
  newNode.next = currentNode;
  currentNode.prev = newNode;
  newNode.prev = beforeNode;
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
    return pop();    
  }

  const removedNode = get(index)
  const beforeNode = removedNode.prev
  const afterNode = removedNode.next

  beforeNode.next = afterNode;
  afterNode.prev = beforeNode;
  removedNode.next = null;
  removedNode.prev = null;

  size--;
  return removedNode
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
  return shiftedNode;
}

function pop(){
  if(size == 0){
    console.log('노드가 없습니다.')
    return
  }

  let popedNode = tailNode;

  if(size == 1){
    headNode = null;
    tailNode = null;
  } 
  else {
    tailNode = tailNode.prev
    tailNode.next = null;
    popedNode.prev = null;
  }
  
  size--;
  return popedNode;
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

