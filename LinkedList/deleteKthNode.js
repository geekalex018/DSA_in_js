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

function deletekthNode(index, head) {
  let temp = head;
  let temp2 = head;
  let prev = null;
  let Length = 0;

  if (head.next == null) {
    return null;
  }

  while (temp2) {
    temp2 = temp2.next;
    Length++;
  }

  if (Length < index) {
    console.log("Index is out of bounds");
    return null;
  }

  let count = 0;

  while (temp) {
    if (count == index) {
      prev.next = temp.next;
      return head;
    } else {
      prev = temp;
      temp = temp.next;
      count++;
    }
  }
  return head;
}

let ll = new Node(10);

insertNode(20, ll);
insertNode(30, ll);
insertNode(40, ll);
insertNode(50, ll);
insertNode(60, ll);

let newHead = deletekthNode(40, ll);

ll = newHead;

printList(ll);
