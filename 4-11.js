/* sum of whole array */

var sumArray = function(arr){
    return arr.reduce((total, num) => total + num, 0);
}

var BinaryTree = function(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BinaryTree.prototype.countPathsWithRoot = function(value, path){
    var pathCount = 0;
    if (path === undefined){
        path = [this.value];
    } else {
        path = [...path, this.value];
    }
    if (sumArray(path) === value){
        pathCount ++;
    }
    if (this.left !== null){
        pathCount += this.left.countPathsWithRoot(value,path);
    }
    if (this.right !== null){
        pathCount += this.right.countPathsWithRoot(value,path);
    }
    return pathCount;
}

BinaryTree.prototype.pathsWithSum = function(value){
    var pathCount = 0;
    pathCount += this.countPathsWithRoot(value);
    if (this.left !== null){
        pathCount += this.left.countPathsWithRoot(value);
    }
    if (this.right !== null){
        pathCount += this.right.countPathsWithRoot(value);
    }
    return pathCount;
};

/* TEST */
var a = new BinaryTree(5);
var b = new BinaryTree(3);
var c = new BinaryTree(5);
var d = new BinaryTree(8);
var e = new BinaryTree(1);
var f = new BinaryTree(2);

a.left = b;
a.right = c;
c.left = d;
d.left = e;
d.right = f;

console.log(a.pathsWithSum(8), 1);
console.log(a.pathsWithSum(5), 2);
console.log(a.pathsWithSum(3), 3);