var parenthesis = function(n){
    if (!Number.isInteger(n)) return new Error('Not an integer value.');
    let answer = [];
    let recurse = function(currPar, remains){
        if (remains === 0 ){
            answer.push(currPar);
        } else {
            let used = {};
            if(!used[`()${currPar}`]){
                used[`()${currPar}`] = true;
                recurse(`()${currPar}`, remains - 1);
            }
            if(!used[`(${currPar})`]){
                used[`(${currPar})`] = true;
                recurse(`(${currPar})`, remains - 1);
            }
            if(!used[`${currPar}()`]){
                used[`${currPar}()`] = true;
                recurse(`${currPar}()`, remains - 1);
            }
        }
    }

    recurse('', n);
    return answer;
}

/* TEST */
console.log(parenthesis(3));