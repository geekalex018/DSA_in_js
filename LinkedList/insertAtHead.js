class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertAtHead(data) {
    this.head = new Node(data, this.head);
  }

  insertAtTail(data) {
    if (!this.head) {
      this.insertAtHead(data);
      return;
    }

    let temp = this.head;
    while (temp.next !== null) {
      temp = temp.next;
    }

    temp.next = new Node(data);
  }
}

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

const ll = new LinkedList();
ll.insertAtTail(20, ll.head);
ll.insertAtTail(30, ll.head);
ll.insertAtTail(40, ll.head);
// ll.insertAtTail(50, ll.head);

printList(ll.head);
