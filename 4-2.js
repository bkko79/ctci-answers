var Queue = require('./utils/queue');
var BST   = require('./utils/BST');

var insertBalanced = function(array){
    var bst = new BST();
    var q = new Queue();
    q.add(array);
    while(!q.isEmpty()){
        let current = q.remove();
        bst.insert(current[Math.floor(current.length/2)]);

        if (current.slice(0, Math.floor(current.length/2)).length > 0){
            q.add(current.slice(0, Math.floor(current.length/2)));
        }
        if (current.slice(Math.floor(current.length/2)+1).length > 0) {
            q.add(current.slice(Math.floor(current.length/2)+1));
        }
    }
    return bst;
};


/* TEST */
var arr1 = [1,2,3,4,5,6];
var tree1 = insertBalanced(arr1);
tree1.printLevelOrder();