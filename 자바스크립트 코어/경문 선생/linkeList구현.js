let head = null // node obj
let current = null // node obj
let size = 0 // 총 노드 수 

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
  
  current = head
  current = current.next
  

}

add(1)