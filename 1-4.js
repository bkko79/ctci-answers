//is text is palindrome with permutation
var isPermutationOfPalindrome = function(string){

    // N(O)
    var chars = {};
    var mulligun = false;
    var result = true;
    string.split('').forEach((char) => {
        if ( char !== ' ') {
            var lower = char.toLowerCase();
            if (chars[lower] === undefined) {
                chars[lower] = 0;
            }
            chars[lower]++;
        }
    });
    Object.keys(chars).forEach((char) => {
        if (chars[char] % 2 > 0){
            if (mulligun){
                result = false;
            } else {
                mulligun = true;
            }
        }
    });
    return result;
};

console.log(isPermutationOfPalindrome("lev"));