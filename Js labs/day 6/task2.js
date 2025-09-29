function Node(value) {
  this.value = value;
  this.next = null;
  this.before = null;
}

function LinkedList() {
  this.head = null;
  this.tail = null;

  this.append = function(value) {
    const newNode = new Node(value);

    if (!this.head) {           
      this.head = newNode;
      this.tail = newNode;
      return;
    }

    newNode.before = this.tail;   
    this.tail.next = newNode;     
    this.tail = newNode;          
  };

  this.print = function() {
    let current = this.head;
    let result = "";
    while (current) {
      result += current.value + " -> ";
      current = current.next;
    }
    console.log(result + "null");
  };
}


const list = new LinkedList();
list.append(10);
list.append(20);
list.append(30);
list.print(); 
