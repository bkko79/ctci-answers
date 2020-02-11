//isSimilar (one letter edit / remove or added)
var isSimilar = function(strA, strB){

    // O(N)    
    var checkRemove = function(first, second){
        if (first.length !== second.length -1 ){
            return false;
        } else {
            var mulligan = false; //more than 2 is wrong
            var fp = 0; //first pointer
            var sp = 0; //second pointer
            while ( fp < first.length ){
                if (first[fp] !== second[sp]){
                    if (mulligan) {
                        return false;
                    } else {
                        mulligan = true;
                        sp++;
                    }
                } else {
                    fp++;
                    sp++;
                }
            } 
            return true;
        }
    };

    var checkDiff = function(first, second){
        if (first.length !== second.length){
            return false;
        } else {
            var mulligan = false; //more than 2 is wrong
            var fp = 0; //first pointer
            var sp = 0; //second pointer
            while (fp < first.length){
                if (first[fp] !== second[sp]){
                    if(mulligan){
                        return false;
                    } else {
                        mulligan = true;
                    }
                }
                fp++;
                sp++;
            }
            return true;
        }
    };

    return checkRemove(strA, strB) || checkRemove(strB, strA) || checkDiff(strA, strB);
};

console.log(isSimilar('ale', 'pale'));