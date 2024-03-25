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

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

function deleteTailNode(head) {
  let temp = head;

  if (head.next == null) {
    return null;
  }

  while (temp) {
    if (temp.next.next == null) {
      temp.next = null;
    }
    temp = temp.next;
  }
  return head;
}

let ll = new Node(10);

insertNode(20, ll);
insertNode(30, ll);
insertNode(40, ll);
insertNode(50, ll);
insertNode(60, ll);

let newHead = deleteTailNode(ll);

ll = newHead;

printList(ll);
