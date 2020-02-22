// CrossBit (Every even bits with next one)
// Condition: Using less operators possible

//brute force
var crossBit = function(int){
    let b = int.toString(2).split('');
    for(let i = 0; i < b.length; i+=2){
        if ( b[i+1] !== undefined ){
            let temp = b[i];
            b[i] = b[i+1];
            b[i+1] = temp;
        }
    }
    return b.join('');
}
/*
masking(pseudocode)

evenMask = 01010101... (32 or 64 bit);
oddMask = 10101010...

return ( x & evenMask << 1) | (x & oddMask >> 1);
*/

var crossBit1 = function(int){ //TODO
    let mask = '101010101010101010101010101010101010101010';
    let b = int.toString(2, 32);
    return ((int & mask) >> 1) | ((int & ~mask) << 1).toString(2);
}

console.log(crossBit(17));
console.log(crossBit1(17));