//Get every subsets from set with recursion

var returnSubsets = function(set){
    let subsets = [];
    var recurse = function(currSet, remains){
        subsets.push(currSet); //set addition
        for( let i = 0; i < remains.length; i++){
            recurse(currSet.concat([remains[i]]), remains.slice(i + 1)); 
            // Seperates concatenated value from remains and recurse until remains are removed
        }
    }
    recurse([], set);
    return subsets;
}

/* TEST */
console.log(returnSubsets([1, 2, 3, 4])); // O(n * 2^n) 2^n = qty. of sets