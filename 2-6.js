//is list Palindrome * TO DO

class LinkedList{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var isPalindrome = function(list){
    let text = '';

    //get whole linkedlist in text 
    while (list !== null){
        text += list.value;
        list = list.next;
    }
    return text == text.split('').reverse('').join('')
}

/* TEST */

var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('c');
var f = new LinkedList('b');
var g = new LinkedList('a');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(isPalindrome(a));