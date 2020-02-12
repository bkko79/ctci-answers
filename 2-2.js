// return nth to last linkedlist

/* CLASS */
class LinkedList {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

//Recursive until nth
var findNthToLast = function (k, head){
    if (head === null || k < 1){
        return;
    } else if ( k === 1){
        console.log(head.value);
        findNthToLast(k, head.next); // Prints every next nodes (K == 1) until head is null.
    } else {
        findNthToLast(k-1, head.next);
    }
}

/* LinkedList Preset in JS */
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');

a.next = b;
b.next = c;
c.next = d;

/* test */
findNthToLast(3, a);