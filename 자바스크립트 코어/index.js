let headNode = null // node obj

function add(value) {

  let newNode ={
    value: value,
    next: null
  }

  if(headNode == null){
    headNode = newNode
    return
  }

  let currentNode = headNode

  while(currentNode.next != null){
    currentNode = currentNode.next 
  }
  
  currentNode.next = newNode;   
}

function addAt(value,index){   
  
  let lastIndex = getSize();
  let currentNode = headNode;  

  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }

  let newNode = {
    value: value,
    next: null
  };

  if(index === 0){            
    newNode.next = headNode;  
    headNode = newNode;         
    return
  }  

  if(index === lastIndex){  
    add(value);
    return
  }
  
  for(let i = 0; i < index - 1 ; i++){    
    currentNode = currentNode.next;
  }

  newNode.next = currentNode.next   
  currentNode.next = newNode  
}

function remove(value){  
  let currentNode = headNode; 
  let numberOfNodes = getSize()
  let targetIndex = null;
  
  if(headNode == null){
    console.log('노드가 없습니다.')
    return
  }
  
  for(let i = 0; i < numberOfNodes; i++){
    if(currentNode.value == value){
      targetIndex = i;
    }
    currentNode = currentNode.next;
  }
  
  if(targetIndex == null){
    console.log(`${value}를 찾을 수 없습니다.`)
  }

  removeAt(targetIndex)
  
  // ㅡㅡㅡㅡㅡㅡㅡㅡㅡ 위 아래 뭐가 더 좋은가요?

//   let currentNode = headNode; 
//   let numberOfNodes = getSize()  
  
//   if(headNode == null){
//     console.log('노드가 없습니다.')
//     return
//   }
  
//   for(let i = 0; i < numberOfNodes; i++){
//     if(currentNode.value == value){
//       removeAt(i)
//       return
//     }
//     currentNode = currentNode.next;
//   }  
  
//   console.log(`${value}를 찾을 수 없습니다.`)
}

function removeAt(index){

  let currentNode = headNode;  
  let lastIndex = getSize() - 1;

  if(headNode == null){
    console.log('노드가 없습니다.')
    return
  }
  
  if(index < 0 || index > lastIndex){
    console.log(`index의 범위는 0~${lastIndex} 입니다.`)
    return
  }
  
  if(index === 0){
    headNode = currentNode.next
    return
  }

  if(index == lastIndex){
    for(let i = 0; i < index - 1; i++){
      currentNode = currentNode.next;
    }

    currentNode.next = null;
    return
  }

  for(let i = 0; i < index - 1 ; i++){  
    currentNode = currentNode.next;      
  }  
  currentNode.next = currentNode.next.next
}

function get(index){

  let lastIndex = getSize() - 1;

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

function getSize(){
  let currentNode = headNode; 
  let size = 0;
  
  while(currentNode != null){
    size += 1
    currentNode = currentNode.next
  }
  
  return size;
}

function isEmpty(){
  return headNode == null
}

function printAllNode(){
  let currentNode = headNode; 

  while(currentNode != null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }  
}

add(0)
add(1)
addAt(2,2)
printAllNode()