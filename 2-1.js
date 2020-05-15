// Check if linkedlist conatins duplicated nodes.

/* CLASS */
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var checkDuplicated = function (head, node){
    var currentNode = head;
    while (currentNode !== node){
        if(currentNode.value === node.value){
            return true; 
        }
        currentNode = currentNode.next;
    }
    return false;
}

var removeDuplicated = function (head){
    var node = head;
    while (node !== null){
        if (node.next !== null && checkDuplicated(head, node.next)){
            node.next = node.next.next;
        } else {
            node = node.next;
        }
        node = node.next;
    }
}

var removeDuplicatedWithSet = function(head){
    const _set = new Set()
    let current = head
    let prev = null
    while (current){
        if (_set.has(current.value)){
            prev.next = current.next
            prev = current
            current = current.next
        } else {
            _set.add(current.value)
            prev    = current
            current = current.next
        }
    }
}

var printLinkedList = function(head) {
    var node = head;
    console.log('start of linked list');
    while (node !== null) {
      console.log(node.value);
      node = node.next;
    }
    console.log('end of linked list');
  };


/* LinkedList Preset in JS */
var a = new LinkedList('a');
var b = new LinkedList('b');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('c');
var c = new LinkedList('c');

a.next = b;
b.next = c;
c.next = d;

/* test */
removeDuplicatedWithSet(a);
printLinkedList(a);