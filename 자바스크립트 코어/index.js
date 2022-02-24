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
  
  let maxIndex = getNumberOfNodes();
  let currentNode = headNode;  

  let newNode = {
    value: value,
    next: null
  };

  if(index === 0){            
    newNode.next = headNode;  
    headNode = newNode;         
    return
  }  

  if(index === maxIndex){  
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
  currentNode = headNode;
  let i = 0;
  let targetIndex = null;

  while(currentNode != null){
    if(currentNode.value == value){
      targetIndex = i;
      break
    }

    currentNode = currentNode.next;
    i++;
  }

  if(targetIndex == null){
    console.log('삭제할 value를 찾을 수 없습니다.')
    return
  }

  removeAt(targetIndex)
}

function removeAt(index){
  currentNode = headNode;

  if(currentNode == null){
    console.log('노드가 없습니다.')
    return
  }

  let numberOfNodes = getNumberOfNodes();
  
  /*맨 앞을 삭제 할 경우*/
  if(index === 0){
    headNode = currentNode.next
    return
  }

  /*맨 뒤를 삭제 할 경우*/
  if(numberOfNodes - 1 == index){

    while(currentNode.next.next != null){
      currentNode = currentNode.next
    }

    currentNode.next = null;
    return
  }

  /*중간을 삭제 할 경우*/
  if(index < numberOfNodes){

    for(let i = 0; i < index ; i++){

      if(i == index - 1){
        currentNode.next = currentNode.next.next
        return
      }     
      
      currentNode = currentNode.next;      
    }  
  }  
}

function get(index){
  if(getNumberOfNodes() <= index){ 
    console.log(`index에 해당하는 node가 없습니다. 노드의 총 갯수는 ${getNumberOfNodes()} 입니다.`)
    return
  }

  currentNode = headNode;

  for(let i = 0; i < index ; i++){
    currentNode = currentNode.next;
  }

  return currentNode
}

function getNumberOfNodes(){
  currentNode = headNode;
  let numberOfNodes = 0;
  
  while(currentNode != null){
    numberOfNodes += 1
    currentNode = currentNode.next
  }

  currentNode = headNode;
  return numberOfNodes;
}

function isEmpty(){
  return headNode == null
}

function printAllNode(){
  currentNode = headNode;

  while(currentNode != null) {
    console.log(currentNode);
    currentNode = currentNode.next;
  }  
  currentNode = headNode;
}

