class Node{
  constructor(value){
    this.value = value;  
    this.next = null;
  }
}

class Queue{
  constructor(){ 
    this.head = null;
    this.tail = null;
    this.size = 0
  }

  enQueue(value){
    const newNode = new Node(value);

    if(this.isEmpty()){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  deQueue(){
    if(this.size === 1){

    }
  }
  isEmpty(){
    !this.head
  }
}