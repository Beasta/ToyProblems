//from CodingGame "Power of Thor"

/**
 * the standard input according to the problem statement.
 * ---
 * Hint: You can use the debug stream to print initialTX and initialTY, if Thor seems not follow your orders.
 **/

var inputs = readline().split(' ');
var lightX = parseInt(inputs[0]); // the X position of the light of power
var lightY = parseInt(inputs[1]); // the Y position of the light of power
var initialTX = parseInt(inputs[2]); // Thor's starting X position
var initialTY = parseInt(inputs[3]); // Thor's starting Y position
var currentX = initialTX;
var currentY = initialTY;

// game loop
while (true) {
    var remainingTurns = parseInt(readline()); // The remaining amount of turns Thor can move. Do not remove this line.
    var movement = "";
    // Write an action using print()
    // To debug: printErr('Debug messages...');
    if( currentY > lightY ){
        movement += "N"; 
    }else if( currentY < lightY ){
        movement += "S";
    }
    
    if( currentX > lightX ){
        movement += "W";
    }else if( currentX < lightX ){
        movement += "E";
    }
    
    locationUpdate(movement);
    print(movement); // A single line providing the move to be made: N NE E SE S SW W or NW
}

function locationUpdate(movement){//
 if(movement === "N"){
     currentY--;
 }else if(movement === "NE"){
     currentY--;
     currentX++;
 }else if(movement === "E"){
     currentX++;
 }else if(movement === "SE"){
     currentX++;
     currentY++;
 }else if(movement === "S"){
     currentY++;
 }else if(movement === "SW"){
     currentY++;
     currentX--;
 }else if(movement === "W"){
     currentX--;
 }else if(movement === "NW"){
     currentY--;
     currentX--;
 }
}
