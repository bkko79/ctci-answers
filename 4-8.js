//Find first common Ancestor

class BinaryTree{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
    isAncestor(node){
        if (this === node){
            return true;
        } else {
            let left = false;
            let right = false;
            if (this.left !== null){
                left = this.left.isAncestor(node);
            }
            if (this.right !== null){
                right = this.right.isAncestor(node);
            }
            return false || left || right;
        }
    }
}

//Complexity: O(l)  // l = depth level
var firstCommonAncestor = function(node1,node2){
    let currNode = node1;
    while(!currNode.isAncestor(node2)){
        if (currNode === null){
            throw Error;
        } else {
            currNode = currNode.parent;
        }
    }
    return currNode.value;
}

/* TEST */
var a = new BinaryTree('a');
var b = new BinaryTree('b');
var c = new BinaryTree('c');
var d = new BinaryTree('d');
var e = new BinaryTree('e');
var f = new BinaryTree('f');
var g = new BinaryTree('g');
var h = new BinaryTree('h');
var i = new BinaryTree('i');
var j = new BinaryTree('j');
var k = new BinaryTree('k');
var l = new BinaryTree('l');

a.left = b; b.parent = a;
a.right = c; c.parent = a;
b.left = d; d.parent = b;
d.left = g; g.parent = d;
d.right = h; h.parent = d;
h.right = k; k.parent = h;
k.left = l; l.parent = k;
c.left = e; e.parent = c;
c.right = f; f.parent = c;
f.left = i; i.parent = f;
f.right = j; j.parent = f;

console.log(firstCommonAncestor(g, k), 'd');
console.log(firstCommonAncestor(b, i), 'a');
