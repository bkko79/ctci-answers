/* Towers of hanoi
    MAIN LOGIC RECURSION
    1. n-1 A => B
    2. n   A => C
    3. n-1 B => C
*/

let hanoi = (n, from, temp, to) => {
    if(n===1) to.push(from.pop());
    else {
        hanoi(n-1, from, to, temp);
        to.push(from.pop());
        hanoi(n-1, temp, from, to);
    }
    console.log(from,temp,to);
}

hanoi(6, [6,5,4,3,2,1], [], []);