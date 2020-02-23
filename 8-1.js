// Top down dynamic programming (or memoization;)

var tripleSteps = function(stairs){
    let answer = 0; 
    var recurse = function(number){ 
        if (number == 0){ // when stairs are done. (More steps won't be counted)
            answer++;
        } else if (number > 0){ //stairs left. add stacks removing steps in 3 way
            recurse(number - 1);
            recurse(number - 2);
            recurse(number - 3);
        }
    };
    recurse(stairs);
    return answer;
}

/* TEST CASE */

console.log(tripleSteps(2));
console.log(tripleSteps(5));
console.log(tripleSteps(10));
