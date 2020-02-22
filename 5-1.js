var insert = function(N, M, i, j){
    let n = N.split('');
    let m = M.split('');
    for(let a = 0; a < j-i+1; a++){
        n[i+a] = m[a];
    }
    return n.join('');
}

console.log(insert('111111111', '0000', 3, 6));