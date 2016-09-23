/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/


// game loop

while (true) {

    var inputs = readline().split(' ');
    var x = parseInt(inputs[0]);
    var y = parseInt(inputs[1]);
    var nextCheckpointX = parseInt(inputs[2]); // x position of the next check point
    var nextCheckpointY = parseInt(inputs[3]); // y position of the next check point
    var nextCheckpointDist = parseInt(inputs[4]); // distance to the next checkpoint
    var nextCheckpointAngle = parseInt(inputs[5]); // angle between your pod orientation and the direction of the next checkpoint
    var inputs = readline().split(' ');
    var opponentX = parseInt(inputs[0]);
    var opponentY = parseInt(inputs[1]);


    var thrust = accel(angleThrust,distThrust);
    var angleThrust = 0;
    var angleDist = 0;
    var boost = 0;


    // Write an action using print()
    // To debug: printErr('Debug messages...');

    function accel(a,b) {

        if (a === parseInt(a) && b === parseInt(b)) {
            return parseInt((a + b) / 2);
        }

        else if (a !== parseInt(a) && b !== parseInt(b)) {
            return 'BOOST';
        }

        else if (a !== parseInt(a) || b !== parseInt(b)) {
            if (a !== parseInt(a) || b === parseInt(b)) {
                return parseInt((b + 100) / 2);
            }
            else {
                return parseInt((a + 100) / 2);
            }
        }


    }



    //CHECKPOINT ANGLE

    if (nextCheckpointAngle < -100 || nextCheckpointAngle > 100) { // 150Deg Angle Manuveure
        var angleThrust = 0;
    }


    else if (nextCheckpointAngle < -90 || nextCheckpointAngle > 90) { // 90Deg Angle Manuveure
        var angleThrust = 50;
    }

    else if (nextCheckpointAngle < -67.5 || nextCheckpointAngle > 67.5) { // 67.5Deg Angle Manuveure
        var angleThrust = 80;
    }

    else if (nextCheckpointAngle < -45 || nextCheckpointAngle > 45) { // 45Deg Angle Manuveure
        var angleThrust = 90;
    }

    else if (nextCheckpointAngle < -22.5 || nextCheckpointAngle > 22.5) { //22.5Deg Angle Manuveure
        var angleThrust = 95;
    }

    else if (nextCheckpointAngle === 0 || nextCheckpointAngle === 0) { //22.5Deg Angle Manuveure
        var distThrust = 'BOOST';
    }


    //CHECKPOINT DISTANCE

    if (nextCheckpointDist > 8000) {
        var distThrust = 'BOOST';
    }

    else if (nextCheckpointDist > 5000) {
        var distThrust = 'BOOST';
    }

    else if (nextCheckpointDist > 3000) {
        var distThrust = 100;
    }

    else if (nextCheckpointDist > 2000) {
        var distThrust = 80;
    }

    else if (nextCheckpointDist > 1000) {
        var distThrust = 60;
    }

    else if (nextCheckpointDist > 600) {
        var distThrust = 45;
    }

    else if (nextCheckpointDist > 400) {
        var distThrust = 40;
    }



    // You have to output the target position
    // followed by the power (0 <= thrust <= 100) or "BOOST"
    // i.e.: "x y thrust"





    print(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thrust);
}