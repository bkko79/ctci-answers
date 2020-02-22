//Draw a line in bit with given x1, x2 and y

var drawLine = function(screen, width, x1, x2, y){
    let byte;
    let pixel;
    for (let i = x1; i < x2; i++){
        byte = y * (width / 8) + Math.floor(i / 8);
        pixel = i % 8;
        screen[byte][pixel] = 1;
    }
    return screen;
}

var testScreen = [[0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], 
              [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], 
              [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], 
              [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0], [0,0,0,0,0,0,0,0]];
console.log(drawLine(testScreen, 24, 4, 21, 1));