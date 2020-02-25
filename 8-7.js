/* return text Permutations */

var permuteString = function(string) {
    let answers = [];
    var recurse =function(str, remain){
        if (remain.length === 0){
            answers.push(str);
        } else {
            for (let i = 0; i < remain.length; i++){
                recurse(str + remain.charAt(i), remain.slice(0,i) + remain.slice(i+1));
            }
        }
    };
    recurse('',string);
    return answers;
};

console.log(permuteString('abcd'));