//find successor

class BSTp {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}
var findSuccessor = function(node){
    let successor = null;
    if (node.right !== null ){ //if right node exists, its successor.
        successor = node.right;
        while (successor.left !== null){ // most deep left node becomes successor
            successor = node.left;
        }
    } else if (node.parent !== null){ // no right nodes and no parent means root
        let currNode = node;
        while (currNode.parent !== null && successor === null){ // go to highest root
            if (currNode.parent.left === currNode) {
                successor = currNode.parent;
            }
            currNode = currNode.parent;
        }
    } // no node.left because its in-order traversal
    return successor; 
}

/* TEST */
var a = new BSTp(10);
var b = new BSTp(2);
var c = new BSTp(3);
var d = new BSTp(4);
var e = new BSTp(6);
var f = new BSTp(5);
var g = new BSTp(7);

a.left = b; b.parent = a;
b.right = c; c.parent = b;
c.right = d; d.parent = c;
d.right = e; e.parent = d;
e.left = f; f.parent = e;
e.right = g; g.parent = e;


console.log(findSuccessor(f).value);
console.log(findSuccessor(g).value);