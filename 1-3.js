//URLify (in javascript way)
var urlify = function( string ){
    if ( string.length <= 0 ){
        return false;
    }
    var url = string.replace(' ', '%20');
    return url
};

//URLify (with char array)
var urlifyArray = function(string){
    var strArr  = string.split('');
    var pointer = 0;
    while (pointer < string.length){
        if (strArr[pointer].match(/\s/g)){
            strArr.splice( pointer, 1, '%');
            strArr.splice( pointer+1, 0, '2');
            strArr.splice( pointer+2, 0, '0');
        }
        pointer++;
    }
    return strArr.join('');
};

//test
console.log(urlifyArray("Will Smith"));