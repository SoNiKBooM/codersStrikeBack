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

        else if ((a !== parseInt(a)) && (b !== parseInt(b))) {
            return 'BOOST';
        }

        else if ((a !== parseInt(a)) || (b !== parseInt(b))) {
            if ((a !== parseInt(a)) && (b === parseInt(b))) {
                return parseInt((b + 100) / 2);
            }
            else {
                return parseInt((a + 100) / 2);
            }
        }


    }



    //CHECKPOINT ANGLE

    if (nextCheckpointAngle <= -180 || nextCheckpointAngle >= 180) { // More than 150Deg Angle Manuveure
        var angleThrust = 0;
        var distThrust = 0;
    }

    else if (nextCheckpointAngle <= -160 || nextCheckpointAngle >= 160) { // 90Deg Angle Manuveure
        var angleThrust = 0;
        var distThrust = 0;
    }

    else if (nextCheckpointAngle <= -140 || nextCheckpointAngle >= 140) { // 67.5Deg Angle Manuveure
        var angleThrust = 0;
        var distThrust = 0;
    }

    else if (nextCheckpointAngle <= -120 || nextCheckpointAngle >= 120) { // 45Deg Angle Manuveure
        var angleThrust = 0;
        var distThrust = 0;
    }

    else if (nextCheckpointAngle <= -100 || nextCheckpointAngle >= 100) { //Between 0 and 45Deg Angle
        var angleThrust = 0;
    }

    else if (nextCheckpointAngle <= -80 || nextCheckpointAngle >= 80) { //Between 0 and 45Deg Angle
        var angleThrust = 25;
    }

    else if (nextCheckpointAngle <= -60 || nextCheckpointAngle >= 60) { //Between 0 and 45Deg Angle
        var angleThrust = 50;
    }

    else if (nextCheckpointAngle <= -40 || nextCheckpointAngle >= 40) { //Between 0 and 45Deg Angle
        var angleThrust = 75;
    }

    else if (nextCheckpointAngle <= -20 || nextCheckpointAngle >= 20) { //Between 0 and 45Deg Angle
        var angleThrust = 90;
    }

    else if (nextCheckpointAngle <= -0 || nextCheckpointAngle >= 0) { //Straight On
        if (nextCheckpointDist > 5000) {
            var angleThrust = 'BOOST'
        }
        else {
            var angleThrust = 100;
        }
    }

    else if (nextCheckpointAngle === 0) { //Straight On and distance good
        var angleThrust = 100;
    }




    //CHECKPOINT DISTANCE

    if (nextCheckpointDist > 3000) {
        var distThrust = 100;
    }

    else if (nextCheckpointDist <= 4000 && nextCheckpointDist >= 3000) {
        var distThrust = 75;
    }

    else if (nextCheckpointDist < 3000 && nextCheckpointDist >= 2000) {
        var distThrust = 50;
    }

    else if (nextCheckpointDist < 1000 && nextCheckpointDist >= 500) {
        var distThrust = 25;
    }

    else if (nextCheckpointDist < 500 && nextCheckpointDist >= 200) {
        var distThrust = 0;
    }

    else if (nextCheckpointDist < 200) {
        var distThrust = 0;
    }



    // You have to output the target position
    // followed by the power (0 <= thrust <= 100) or "BOOST"
    // i.e.: "x y thrust"





    print(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thrust);
}