class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
        this.tail = null;

    }
    pushFront(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
    }
    pushBack(data) {
        const newNode = new Node(data);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }
    popFront() {
        if (!this.head) return null;
        const removedData = this.head.data;
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null; 
        }
        this.size--;
        return removedData;
    }
    popBack() {
        if (!this.tail) return null;
        const removedData = this.tail.data;
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null; 
        }
        this.size--;
        return removedData;
    }
    getSize() {
        return this.size;
    }
    isEmpty() {
        return this.size === 0;
    }
    printList() {
        let current = this.head;
        const elements = [];
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements);
    }
}
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
        this.color = Node.getRandomColor();
    }
    static getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}    

let list = new LinkedList();
function render(list) {
    const container = document.getElementById("list-container");
    container.innerHTML = "";

    let current = list.head;
    while (current) {
        const nodeDiv = document.createElement("div");
        nodeDiv.className = "node";
        nodeDiv.textContent = current.data;
        nodeDiv.style.backgroundColor = current.color;

        container.appendChild(nodeDiv);
        current = current.next;
    }
}


function pushFront() {
    const value = document.getElementById("valueInput").value;
    if (value) {
        list.pushFront(value);
        render(list);
    }
}

function pushBack() {
    const value = document.getElementById("valueInput").value;
    if (value) {
        list.pushBack(value);
        render(list);
    }
}

function updateMessage() {
  const msg = document.getElementById("message");
  if (list.isEmpty()) {
    msg.textContent = "Linked list is empty.";
    msg.style.color = "#d9534f";
    msg.style.fontSize = "26px";
  } else {
    msg.textContent = "";
  }
}

function updateSize() {
  document.getElementById("size-display").textContent = `Size: ${list.getSize()}`;
}

function popFront(button) {
  if (list.isEmpty()) {
    showMessage("List is empty!", true);
    invalidAction(button);
    return;
  }
  list.popFront();
  render(list);
}

function popBack(button) {
  if (list.isEmpty()) {
    showMessage("List is empty!", true);
    invalidAction(button);
    return;
  }
  list.popBack();
  render(list);
}

function invalidAction(buttonElement) {
    console.log(buttonElement);
  updateMessage();
  buttonElement.classList.add("invalid");
  setTimeout(() => buttonElement.classList.remove("invalid"), 500);
}


function render(list, containerId = "list-container") {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  let current = list.head;
  while (current) {
    const nodeDiv = document.createElement("div");
    nodeDiv.className = "node";
    nodeDiv.textContent = current.data;
    nodeDiv.style.backgroundColor = current.color;

    container.appendChild(nodeDiv);
    current = current.next;
  }

  if (containerId === "list-container") {
    updateMessage();
    updateSize();
  }
}
function reverseListAnimation() {
  if (list.isEmpty()) {
    showMessage("List is empty!", true);
    return;
  }

  const newList = new LinkedList();
  let current = list.tail;

  while (current) {
    newList.pushBack(current.data); 
    newList.tail.color = current.color; 
    current = current.prev;
  }

  animateReverse(list, newList);
}

function animateReverse(oldList, newList) {
  const oldContainer = document.getElementById("list-container");
  const newContainer = document.getElementById("reversed-container");
  newContainer.innerHTML = "";

  render(newList, "reversed-container");

  newContainer.querySelectorAll(".node").forEach(node => {
    node.style.opacity = 0;
  });

  const oldNodes = oldContainer.querySelectorAll(".node");
  const newNodes = newContainer.querySelectorAll(".node");

  [...oldNodes].reverse().forEach((node, revIndex) => {
    const target = newNodes[revIndex]; 

    const startRect = node.getBoundingClientRect();
    const endRect = target.getBoundingClientRect();

    const horizontalOffset =
      oldNodes[oldNodes.length - 1].offsetLeft - node.offsetLeft;

    setTimeout(() => {
      node.style.transition = "transform 0.6s ease-in";
      node.style.transform = `translateX(${horizontalOffset}px)`;

      setTimeout(() => {
        const dx = endRect.left - startRect.left - horizontalOffset;
        const dy = endRect.top - startRect.top;

        node.style.transition =
          "transform 1s cubic-bezier(0.68, -0.55, 0.27, 1.55)";
        node.style.transform = `translate(${horizontalOffset + dx}px, ${dy}px)`;

        target.style.opacity = 1;
      }, 600);
    }, revIndex * 200); 
  });


  setTimeout(() => {
    oldContainer.innerHTML = "";
    render(newList, "list-container"); 
    newContainer.innerHTML = "";
    list = newList;
  }, oldNodes.length * 200 + 2000);
}

function emptyList(button) {
  if (list.isEmpty()) {
    showMessage("List is already empty!", true);
    invalidAction(button);
    return;
  }

  const container = document.getElementById("list-container");
  const nodes = container.querySelectorAll(".node");

  nodes.forEach((node, i) => {
    setTimeout(() => {
      node.style.transform = "translateY(50px) scale(0)";
      node.style.opacity = "0";
      setTimeout(() => node.remove(), 400);
    }, i * 100);
  });

  list.head = null;
  list.tail = null;
  list.size = 0;

  updateSize();
  showMessage("List has been emptied!");
}

function showMessage(text, isError = false) {
  const messageDiv = document.getElementById("message");
  messageDiv.textContent = text;

  if (isError) {
    messageDiv.classList.add("error");

    messageDiv.classList.add("wiggle");
    setTimeout(() => messageDiv.classList.remove("wiggle"), 500);
  } else {
    messageDiv.classList.remove("error");
  }
}
