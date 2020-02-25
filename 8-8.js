var uniquePermute = function(string){
    var answers = [];
    var recurse = function(str, remain){
        if (remain.length == 0){
            answers.push(str);
        } else {
            var chars = {};
            for(let i = 0; i < remain.length; i++){
                if (!chars[remain.charAt(i)]) {
                    chars[remain.charAt(i)] = true;
                    recurse(str + remain.charAt(i), remain.slice(0,i) + remain.slice(i+1));
                }
            }
        }
    };
    recurse('', string);
    return answers;
}

/* TEST */

var test1 = 'aaa';
var test2 = 'abc';
var test3 = 'aba';

console.log(uniquePermute(test1));
console.log(uniquePermute(test2));
console.log(uniquePermute(test3));
