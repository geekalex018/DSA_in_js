class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  print() {
    let curr = this.head;
    while (curr) {
      console.log(curr.data);
      curr = curr.next;
    }
    console.log("Length of LinkedList: " + this.size);
  }
}

function getDataAt(head, data) {
  let temp = head;
  let index = 0;
  while (temp) {
    if (temp.data == data) {
      return `${temp.data} found at  index ${index}`;
    } else {
      temp = temp.next;
      index++;
    }
  }
  return `No element with value ${data} in the list`;
}

const ll = new LinkedList();
ll.insert(10);
ll.insert(30);
ll.insert(20);
ll.insert(40);

ll.print();
console.log(getDataAt(ll.head, 450));
