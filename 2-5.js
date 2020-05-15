// Sum lists
class LinkedList {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var getNumber = function(node){
    let num = 0;
    let i = 0;
    while (node !== null){
        if (num === 0){
            num += node.value;
        } else {
            num += node.value * (10**i);
        }
        node = node.next;
        i++;
    }
    return num;
}

var getSum = function(lists){
    let sum;
    if (Array.isArray(lists)){
        sum = lists.reduce( (acc, cur) => {
            return acc + getNumber(cur)
        }, 0 )
        return sum;
    }
}

var a = new LinkedList(7);
var b = new LinkedList(1);
var c = new LinkedList(7); // = 717

a.next = b;
b.next = c;

var d = new LinkedList(5);
var e = new LinkedList(9);
var f = new LinkedList(2); // = 295

d.next = e;
e.next = f;

console.log(getSum([a,d]));  // = 912