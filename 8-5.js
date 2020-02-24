// Multiply without * can be done with sum recursion
var multiplyWithSum = function(a, b){
    if (a < 0 || b < 0){
        return false;
    } else if (b === 0){
        return 0;
    }
    if (b === 1){
        return a;
    } else {
        return a + multiplyWithSum(a, b-1);
    }
}


console.log(multiplyWithSum(3,5));
console.log(multiplyWithSum(3,0));
console.log(multiplyWithSum(0,0));