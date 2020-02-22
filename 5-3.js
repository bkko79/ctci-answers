// Find the longest sequence of 1 flipping only one bit.

var findLongest = function(number){
    let binary = number.toString(2);
    let b = binary.split('0');
    let longest = 0;
    for(let i = 0; i < b.length-1; i++){ // length -1 to avoid last value+1: Time complexity O(n)
        if (b[i].length + b[i+1].length > longest){
            longest = b[i].length + b[i+1].length; //Store ONLY highest value: Space complexity O(1)
        }
    }
    return longest+1; // flipped 0 to be added
}

/* TEST */
console.log(findLongest(315));