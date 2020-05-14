//isSimilar (one letter edit / remove or added)
var isSimilar = function(strA, strB){

    // O(N)    
    var checkRemove = function(first, second){
        if (first.length !== second.length -1){
            [first, second] = [second, first] // swap longer one to first and check once more
            if ( first.length !== second.length -1 ){
                return false;
            }
        } 
        var found = false; //more than 2 is wrong
        var fp = 0; //first pointer
        var sp = 0; //second pointer
        while ( fp < first.length ){
            if (first[fp] !== second[sp]){
                if (found) {
                    return false;
                } else {
                    found = true;
                    sp++;
                }
            } else {
                fp++;
                sp++;
            }
        } 
        return true;
    };

    var checkDiff = function(first, second){
        if (first.length !== second.length){
            return false;
        } else {
            var found = false; //more than 2 is wrong
            var fp = 0; //first pointer
            var sp = 0; //second pointer
            while (fp < first.length){
                if (first[fp] !== second[sp]){
                    if(found){
                        return false;
                    } else {
                        found = true;
                    }
                }
                fp++;
                sp++;
            }
            return true;
        }
    };

    return checkRemove(strA, strB) || checkDiff(strA, strB);
};

console.log(isSimilar('pale', 'bake'));