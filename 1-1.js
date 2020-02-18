//Is Unique
var allUniqueChars = function(string) {
  
    var found = {};
    for(var i = 0; i < string.length; i++){
        if (string[i] in found){
            return false;
        } else {
            found[string[i]] = true;
        }
    }
    return true; // No match found
};

console.log(allUniqueChars("world"));