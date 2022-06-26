import LinkedList from '../linked-list/LinkedList';

export default class Stack {
  constructor() {
    // We're going to implement Stack based on LinkedList since these
    // structures are quite similar. Compare push/pop operations of the Stack
    // with prepend/deleteHead operations of LinkedList.
    this.linkedList = new LinkedList();
  }
