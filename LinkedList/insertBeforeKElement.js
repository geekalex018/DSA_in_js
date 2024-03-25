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

function insertBeforeK(data, index, head) {
  let count = 0;

  if (!head) {
    return new Node(data);
  }

  if (index == 1) {
    return new Node(data, head);
  }

  let temp2 = head;
  let size = 0;
  while (temp2) {
    size++;
    temp2 = temp2.next;
  }
  if (index > size) {
    console.log("Index is not in range");
    return;
  }

  let temp = head;

  while (temp != null) {
    count++;
    if (count == index - 1) {
      let newNode = new Node(data, temp.next);
      temp.next = newNode;
      break;
    }
    temp = temp.next;
  }
  return head;
}

function insertBeforekValue(data, val, head) {
  let temp = head;
  while (temp) {
    if (temp.next.data == val) {
      let newNode = new Node(data, temp.next);
      temp.next = newNode;
      break;
    }
    temp = temp.next;
  }
  return head;
}

function insertAtHead(data, head) {
  if (!head) {
    return new Node(data);
  }
  head = new Node(data, head);
  return head;
}

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

let ll = new LinkedList();

ll.insert(10);
ll.insert(20);
ll.insert(30);
// ll.print();

let newHead = insertBeforekValue(60, 10, ll.head);

// let newHead = insertAtHead(20);

// ll = newHead;

printList(newHead);
