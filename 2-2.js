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
    if (!head) return 0; // Can Return -1 if input for k is 0
    let index = findNthToLast(k, head.next) + 1;
    if (index === k) console.log(k + 'th to last node is ' + head.value);
    return index;
}

/* LinkedList Preset in JS */
var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

/* test */
findNthToLast(7, a);