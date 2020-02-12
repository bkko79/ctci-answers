// Remove certain middle node accessing ceratin node only.

/* CLASS */
class LinkedList {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
};

var removeNode = function(node) {
    while ( node !== null && node.next !== null ){ //stops when last node is called.
        node.value = node.next.value; // replace value pulling from next node.
        if (node.next.next === null){
            node.next = null; // stops when second next is last.
        }
        node = node.next; // while repetition.
    }
};

var printList = function(head) {
    while(head !== null) {
      console.log(head.value);
      head = head.next;
    }
    console.log('done printing');
};

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(removeNode(c));
printList(a);