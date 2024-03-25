class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function insertNode(data, head) {
  let node = new Node(data);

  let curr = head;

  while (curr.next) {
    curr = curr.next;
  }
  curr.next = node;
}

function deleteHead(head) {
  let newHead = head.next;
  head = newHead;
  return newHead;
}

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

let ll = new Node(10);

insertNode(20, ll);
insertNode(30, ll);
insertNode(40, ll);
const newHead = deleteHead(ll);
ll = newHead;
printList(ll);
