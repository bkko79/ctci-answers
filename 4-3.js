var Queue = require('./utils/queue');
var LinkedList = require('./utils/linkedList');
var BST = require('./utils/BST');

var listOfDepths = function(bst){
    var listOfLists = [];
    var list = null;
    var newNode;
    var q = new Queue();
    var nextq = new Queue();
    var currNode = bst;

    q.add(currNode);
    while(!q.isEmpty()){
        currNode = q.remove();
        newNode = new LinkedList(currNode.value);
        newNode.next = list;
        list = newNode;
        if (currNode.left){
            nextq.add(currNode.left);
        }
        if (currNode.right){
            nextq.add(currNode.right);
        }
        if (q.isEmpty()){ //reset variables for next level loop
            listOfLists.push(newNode);
            list= null;
            q = nextq;
            nextq = new Queue();
        }
    }
    return listOfLists;
};

/* TEST */
// 1, 2, 3, 4, 5, 6, 7
var tree = new BST(4);
tree.insert(2);
tree.insert(6);
tree.insert(1);
tree.insert(3);
tree.insert(5);
tree.insert(7);

console.log(listOfDepths(tree));