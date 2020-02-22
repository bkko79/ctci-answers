// binary

var doubleToByte = function(number){
    if ( number < 0 || number > 1){
        return false;
    } else {
        let n = 1;
        let str = "0.";
        while (number > 0 && n <= 32){
            if (number >= Math.pow(2, -n)){
                number -= Math.pow(2, -n);
                str += '1';
            } else {
                str += '0';
            }
            n++;
        }
        if ( n < 32 || number <= 0){
            return str;
        } else {
            return Error;
        }
    }
}

/* TEST */

console.log(doubleToByte(0.125));
console.log(doubleToByte(0.126));
console.log(doubleToByte(0.625));