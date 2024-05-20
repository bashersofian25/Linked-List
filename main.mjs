import { createNode } from "./ListNode.mjs";
import { createLinkedList } from "./LinkedList.mjs";


const myList = createLinkedList(10);
console.log(myList.toString());
myList.append(5);
console.log(myList.toString());
myList.append(11);
console.log(myList.toString());
myList.append(15);
console.log(myList.toString());
myList.prepend(1);
console.log(myList.toString());


myList.pop();
console.log(myList.toString());
console.log(myList.tail());
myList.insertAt(10, 3);
myList.insertAt(1223, 5);
myList.removeAt(1);
console.log(myList.toString());


