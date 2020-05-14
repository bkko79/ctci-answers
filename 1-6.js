var strComp = function(string){

    // O(N)
    var compressed = [];
    var current = '';
    var count = '';
    var max = 1;
    for (var i = 0; i < string.length; i++){
        if ( current == string[i]){
            count++;
        } else {
            compressed.push(current);
            compressed.push(count);
            current = string[i];
            count = 1;
        }
    }
    compressed.push(current)
    compressed.push(count)

    var result = compressed.join('')

    return string.length < result.length ? string : result;
};

console.log(strComp("abbbbcccccceeeaaa"));
console.log(strComp("aabbcc"));