class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

function arraytoLinkedList(arr) {
  const head = new Node(arr[0]);
  let mover = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);
    mover.next = temp;
    mover = mover.next;
  }

  return head;
}

function printList(head) {
  let curr = head;
  while (curr) {
    console.log(curr.data);
    curr = curr.next;
  }
}

let arr = [2, 3, 4, 5, 6];

let ll = arraytoLinkedList(arr);

console.log("ll.data", ll.data);
console.log("ll.next.data", ll.next.data);

printList(ll);
