import { createNode} from "./ListNode.mjs";
export const createLinkedList = (firstNodeValue) => {
    let firstNode = createNode(null, firstNodeValue);
    let _head = Object.assign({}, firstNode);
    let _tail = Object.assign({}, firstNode);
    let _size = 1;
    const append = (value) => {
        const newNode = createNode(null, value);
        (_size == 1)? _head.next = newNode : _tail.next = newNode;
        _tail = newNode;
        _size++;
    };
    const size = () => {return _size;};
    const prepend = (value) => {
        const newNode = createNode(null, value);
        newNode.next = _head;
        _head = newNode;
        _size++;
    };
    const toString = () => {
        let pointedAtNode = _head;
        let finalString = "" 
        while(pointedAtNode != null){
            finalString += `(${pointedAtNode.content}) --> `;
            pointedAtNode = pointedAtNode.next;
        };
        finalString += "null";
        return finalString;
    };
    const at = (index) => {
        let pointedAtNode = _head;
        let i = 0; 
        while(pointedAtNode != null){
            if(i == index) return pointedAtNode;
            i++;
            pointedAtNode = pointedAtNode.next;
        };
        return undefined;
    };
    const find = (value) => {
        let pointedAtNode = _head;
        let i = 0; 
        while(pointedAtNode != null){
            if(value == pointedAtNode.content) return i;
            i++;
            pointedAtNode = pointedAtNode.next;
        };
        return null;
    };
    const contains = (value) => {
        let pointedAtNode = _head;
        while(pointedAtNode != null){
            if(value == pointedAtNode.content) return true;
            pointedAtNode = pointedAtNode.next;
        };
        return false;
    };
    const insertAt = (value, index) => {
        if(index>_size) throw new Error('Index out of range!');
        else if(index == _size) {append(value); return;}
        let prevNode = at(index-1);
        let nextNode = at(index);
        let newNode = createNode(nextNode, value);
        prevNode.next = newNode;
        _size++;

    };
    const removeAt = (index) => {
        if(index>_size) throw new Error('Index out of range for inserting!');
        else if(index == _size) {pop(); return;}
        let prevNode = at(index-1);
        let nextNode = at(index+1);
        prevNode.next = nextNode;
        _size--;
    };
    const head = () => {return _head;};
    const tail = () => {return _tail;};
    const pop = () => {
        const value = Object.assign({}, _tail);
        let newTail = at(_size-2);
        newTail.next = null;
        _tail = newTail;
        _size--;
        return value;
    };

    return {append, prepend, toString, find, contains,
             insertAt, removeAt, head, tail, pop, size, at};

};