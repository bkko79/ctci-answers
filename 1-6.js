var strComp = function(string){

    // O(N)
    var compressed = '';
    var now = '';
    var count = '';
    var max = 1;
    for (var i = 0; i < string.length; i++){
        if ( now == string[i]){
            count++;
        } else {
            compressed = compressed + now + count;
            now = string[i];
            count = 1;
        }
    }
    compressed = compressed + now + count;

    return string.length < compressed.length ? string : compressed;
};

console.log(strComp("abbbbcccccceeeaaa"));
console.log(strComp("aabbcc"));