//Bomberman matrix
var zeroMatrix = function(matrix){

    // O(N)
    var zeroifyRow = function(matrix, row){
        for( var i = 0; i < matrix[row].length; i++ ){
            matrix[row][i] = 0;
        }
    }
    var zeroifyCol = function(matrix, col){
        for( var i = 0; i < matrix.length; i++ ){
            matrix[i][col] = 0;
        }
    }
    var detectZero = function(matrix){
        var zeroPosition = [];
        for(var i = 0; i < matrix.length; i++){
            for(var j = 0; j < matrix[i].length; j++){
                if (matrix[i][j] === 0 ){
                    zeroPosition.push([i, j]);
                }
            }
        }
        return zeroPosition
    }

    var zeros = detectZero(matrix);
    zeros.forEach(zero => {
        zeroifyRow(matrix, zero[0]);
        zeroifyCol(matrix, zero[1]);
    });
    return matrix;
};
var testMatrix = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1]
  ];
console.log(zeroMatrix(testMatrix));