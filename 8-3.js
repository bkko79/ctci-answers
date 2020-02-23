//Binary search in dynamic programming

var findMagic = function(array, start, end) {
    if (start === undefined){
        start = 0;
        end = array.length - 1
    }
    var mid = Math.floor(start + (end - start) / 2);

    if (array[mid] === mid){
        return mid;
    }

    if (start === mid && array[mid] !== mid){
        return false;
    } else if (array[mid] > mid){
        return findMagic(array, start, mid);
    } else if (array[mid] < mid){
        return findMagic(array, mid, end);
    } else {
        return false;
    }
};
  
/* TEST */
console.log(findMagic([-1, 0, 1, 3, 9, 100]), 3);
console.log(findMagic([-1, 0, 1, 2, 3, 5, 100, 200, 300, 400, 500, 600, 700]), 5);
console.log(findMagic([5, 5, 5, 5, 5, 5, 5]), 5); // would need to be in linear runtime if values are not distinct > O(n) 