class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class CircularLinkedList{
  constructor(){    
    this.tail = null;
    this.size = 0;
  }

  addFirst(value){
    const newNode = new Node(value);

    if(this.isEmpty()){      
      this.tail = newNode;
      newNode.next = newNode;
    }
    else{
      newNode.next = this.tail.next;   
      this.tail.next = newNode;   
    }

    this.size++;
  }
  
  add(value){
    const newNode = new Node(value);

    if(this.isEmpty()){     
      this.tail = newNode;    
      newNode.next = newNode;  
    }
    else{
      newNode.next = this.tail.next;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    
    this.size++;    
  }

  addAt(value,index){
    
    const lastIndex = this.size;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`)
      return
    }   

    if(index === 0){
      this.addFirst(value);
      return
    }

    if(index === lastIndex){
      this.add(value);
      return
    }
    
    const newNode = new Node(value);
    const currentNode = this.get(index);
    const beforeNode = this.get(index - 1);

    beforeNode.next = newNode;
    newNode.next = currentNode;
    this.size++;
  }

  remove(value){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }
    
    let currentNode = this.head;
    let indexOfValue = null;

    for(let i = 0; i < this.size; i++){
      if(currentNode.value == value){
        indexOfValue = i;
        break;
      }

      currentNode = currentNode.next;
    }

    if(indexOfValue === null){
      console.log(`${value}를 찾을 수 없습니다.`)
      return
    }

    this.removeAt(indexOfValue);
  }
  
  removeAt(index){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }

    const lastIndex = this.size - 1;

    if(index < 0 || index > lastIndex){
      console.log(`index의 범위는 0~${lastIndex} 입니다.`)
      return
    }

    if(index === 0){
      return this.shift();
    }

    if(index === lastIndex){ 
      return this.pop();
    }

    let removedNode = this.get(index);
    let beforeNode = this.get(index - 1);

    beforeNode.next = removedNode.next;
    removedNode.next = null;
    this.size--;

    return removedNode
  }

  shift(){
    if(this.isEmpty()){
      console.log('노드가 없습니다.');
      return
    }

    const shiftedNode = this.head;

    if(this.size === 1){
      this.head = null;
      this.tail = null; 
    }
    else{
      this.head = this.head.next;
      this.head.prev = null;
      shiftedNode.next = null;      
    }


  }

  pop(){
    
  }

  get(index){

  }

  printAllNode(){
    
  }

  isEmpty(){
    return !this.head
  }

}

