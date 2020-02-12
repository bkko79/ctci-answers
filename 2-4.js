// Sort whole linkedlist with partition value. *TO DO

/* CLASS */
class LinkedList {
    constructor (value){
        this.value = value;
        this.next = null;
    }
}

let partition = function(head, partition) {
    let left;
    let currLeft = null;
    let right;
    let currRight = null;
    let node = head;
    while (node !== null){
        if (node.value < partition){
            if (currLeft === null){
                left = node;
                currLeft = left;
            } else {
                currLeft.next = node;
                currLeft = currLeft.next;
            }
        } else {
            if(currRight === null){
                right = node;
                currRight = right;
            } else {
                currRight.next = node;
                currRight = currRight.next;
            }
        }
        node = node.next;
    }
    currRight.next = null;
    currLeft.next = right;
    return left;
};

let printList = function(list){
    while (list !== null ){
        console.log(list.value);
        list = list.next;
    }
}
  
/* TESTS */
// Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition = 5]
// Output: 3 -> 1 -> 2 -> 5 -> 5 -> 8 -> 10


var a = new LinkedList(3);
var b = new LinkedList(5);
var c = new LinkedList(8);
var d = new LinkedList(5);
var e = new LinkedList(10);
var f = new LinkedList(2);
var g = new LinkedList(1);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

var newa = partition(a, 5);
printList(a);