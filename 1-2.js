//Is Permute
var checkPermute = function (stringOne, stringTwo) {

    //O(N^2)
    if (stringOne.length !== stringTwo.length) {
        return false; // No permutation match

    } else {
        var SortedOne = stringOne.split('').sort().join('');
        var SortedTwo = stringTwo.split('').sort().join('');
        return SortedOne === SortedTwo;
    }
};

//test
console.log(checkPermute('test', 'este'));