//Is Unique
var allUniqueChars = function(string) {
    
    // O(n^2) without any data structures
    // recursive loop removing already compared letters
    for( var i = 0; i < string.length; i++ ){
        for (var j = i + 1; j < string.length; j++ ){
            if (string[i] === string[j]){
                return false; //match found
            }
        }
    }
    return true; // No match found
};

console.log(allUniqueChars("world"));