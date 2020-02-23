//bottom-up dynamic programming

var findPaths = function(grid){
    let path = [];
    let endRow = grid.length - 1; //Get grid's row/col size
    let endCol = grid[0].length - 1;
    
    var recurse = function(row, col, currPath){
        if (row === endRow && col === endCol){ //only when row and col reached goal
            path.push( currPath.concat([[row, col]]) ); // final row and col added in path
        } else if ( row <= endRow && col <= endCol){
            if(row < endRow && grid[row+1][col] !== 1){
                recurse(row+1, col, currPath.concat([[row, col]])); //concatenate each paths in array
            }
            if(col < endCol && grid[row][col+1] !== 1){
                recurse(row, col+1, currPath.concat([[row, col]])); //concatenate each paths in array
            }
        }
    };

    recurse(0,0,[]); //start at 0, 0
    return path;
}

/* TEST */

var grid = [
    [0, 0, 0, 0],
    [0, 1, 0, 1],
    [0, 0, 0, 0],
  ];
  
console.log(findPaths(grid));