//Rotate Matrix
var rotateMatrix = function(matrix){
    var last = matrix.length -1; // last edge in next for loop

    var movePixels = function(row, col){
        //m[row][col] to m[col][last - row]
        var fromRow;
        var fromCol;
        var fromPixel;

        var toRow = row;
        var toCol = col;
        var toPixel = matrix[row][col];

        for (var i = 0; i < 4; i++) { //four lines
            fromRow = toRow;
            fromCol = toCol;
            fromPixel = toPixel;

            toRow = fromCol;
            toCol = last - fromRow;
            toPixel = matrix[toRow][toCol];
            matrix[toRow][toCol] = fromPixel;
        }
    }

    for (var i = 0; i < matrix.length; i++){
        for (var j = i; j < last - i; j++){
            movePixels(i, j);
        }
    }
    return matrix;
};

var testMatrix = [
    [1, 2, 3, 4],
    [0, 1, 2, 3],
    [0, 0, 1, 2],
    [1, 0, 0, 1]
    ];
console.log(rotateMatrix(testMatrix));