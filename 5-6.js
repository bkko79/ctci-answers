// Get XOR between two integers in binary.

var getDiff = function (num1, num2){
    let diff = (num1 ^ num2).toString(2);
    return diff.split('').reduce((numBits,char) => {
        return char === '1' ? numBits + 1 : numBits;
    }, 0);
};

/* TEST */
console.log(getDiff(17,16));