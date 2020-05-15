// slower detection in linked list
class LinkedList {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

var slowerDetection = (list) => {
    let faster = list;
    let slower = list;
    while (faster !== null){
        faster = faster.next; // list.next
        slower = slower.next; // list.next
        
        if ( faster === slower && faster !== list.next){
            return faster;
        }

        faster = faster.next; // list.next.next (comparison starts)
        if (faster === slower) {
            return slower;
        }
    }
    return null;
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

console.log(slowerDetection(a));