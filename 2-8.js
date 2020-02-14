// Loop detection in linked list
class LinkedList {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

var loopDetection = (list) => {
    let head = list;
    let loop = list;
    while (head !== null){
        head = head.next; // list.next
        loop = loop.next; // list.next
        
        if ( head === loop && head !== list.next){
            return head;
        }

        head = head.next; // list.next.next (comparison starts)
        if (head === loop) {
            return loop;
        }
    }
    return false;
}


/* TEST */
// A -> B -> C -> D -> E -> C

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
f.next = b;

console.log(loopDetection(a));