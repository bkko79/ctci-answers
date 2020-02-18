var BST = require('./utils/BST');

var checkBalanced = function(bst){
    //last node check
    if (bst.left === null && bst.right !== null){
        if (bst.right.left !== null || bst.right.right !== null){
            return false;
        }
    }
    if (bst.left !== null && bst.right === null){
        if (bst.left.left !== null || bst.left.right !== null){
            return false;
        }
    }

    let answer = true;
    if (bst.left !== null){
        answer = answer && checkBalanced(bst.left);
    }

    if (bst.right !== null){
        answer = answer && checkBalanced(bst.right);
    }

    return answer;
};

/* TEST */

var b1 = new BST(1);
b1.insert(2);
b1.insert(3);
b1.insert(4);
console.log(checkBalanced(b1));

var b2 = new BST(4);
b2.insert(2);
b2.insert(6);
b2.insert(1);
b2.insert(3);
b2.insert(5);
b2.insert(7);
console.log(checkBalanced(b2));