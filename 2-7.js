// get Intersection of 2 linked list. * TODO

class LinkedList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var getIntersection = function(head1, head2){

    if (head1 === null || head2 === null){
        return false;
    }

    while (head1 !== null){
        node = head2;
        while (node !== null){
            if ( head1.value === node.value ){
                return node;
            }
            node = node.next;
        }
        head1 = head1.next;
    }
    return false;
}

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');
var g = new LinkedList('g');
var h = new LinkedList('h');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;

var a1 = new LinkedList('a1');
var b1 = new LinkedList('b1');
var c1 = new LinkedList('c1');

a1.next = b1;
b1.next = c1;
c1.next = d;

var intersectNode = getIntersection(a, a1);
console.log(intersectNode.value);