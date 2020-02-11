//string rotations

var stringRotation = function(str1, str2){

    // str1 = xy
    // str2 = yx
    // xyxy.includes(yx) == true;
    if (str1.length !== str2.length){
        return false;
    }
    return (str1+str1).includes(str2); //one subString
};

console.log(stringRotation('terbottlewe', 'waterbottle'));