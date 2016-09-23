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
    var thrust = '';
    // Write an action using print()
    // To debug: printErr('Debug messages...');


    if (nextCheckpointDist > 5000) { //LONG DISTANCE MANUVEURE

        if (nextCheckpointAngle < -100 || nextCheckpointAngle > 100) { // 150Deg Angle Manuveure
            var thrust = 0;
        }


        else if (nextCheckpointAngle < -90 || nextCheckpointAngle > 90) { // 90Deg Angle Manuveure
            var thrust = 50;
        }

        else if (nextCheckpointAngle < -67.5 || nextCheckpointAngle > 67.5) { // 67.5Deg Angle Manuveure
            var thrust = 80;
        }

        else if (nextCheckpointAngle < -45 || nextCheckpointAngle > 45) { // 45Deg Angle Manuveure
            var thrust = 90;
        }

        else if (nextCheckpointAngle < -22.5 || nextCheckpointAngle > 22.5) { //22.5Deg Angle Manuveure
            var thrust = 95;
        }

        else if (nextCheckpointAngle === 0 || nextCheckpointAngle === 0) { //22.5Deg Angle Manuveure
            var thrust = 'BOOST';
        }


    }

    else if (nextCheckpointDist > 3000 && nextCheckpointDist < 5000) { //MEDIUM DISTANCE MANUVEURE

        if (nextCheckpointAngle < -180 || nextCheckpointAngle > 180) { // 180Deg Angle Manuveure
            var thrust = 0;
        }

        else if (nextCheckpointAngle < -110 || nextCheckpointAngle > 110) { // 110Deg Angle Manuveure
            var thrust = 10;
        }

        else if (nextCheckpointAngle < -90 || nextCheckpointAngle > 90) { // 110Deg Angle Manuveure
            var thrust = 20;
        }

        else if (nextCheckpointAngle < -67.5 || nextCheckpointAngle > 67.5) { // 67.5Deg Angle Manuveure
            var thrust = 50;
        }

        else if (nextCheckpointAngle < -45 || nextCheckpointAngle > 45) { // 45Deg Angle Manuveure
            var thrust = 80;
        }

        else if (nextCheckpointAngle < -22.5 || nextCheckpointAngle > 22.5) { //22.5Deg Angle Manuveure
            var thrust = 90;
        }

        else if (nextCheckpointAngle === 0 || nextCheckpointAngle === 0) {
            var thrust = 95;
        }

    }

    else if (nextCheckpointDist < 3000 && nextCheckpointDist > 1500) { //SHORT DISTANCE MANUVEURE



        if (nextCheckpointAngle < -110 || nextCheckpointAngle > 110) { // 110Deg Angle Manuveure
            var thrust = 0;
        }

        else if (nextCheckpointAngle < -75 || nextCheckpointAngle > 75) { // 67.5Deg Angle Manuveure
            var thrust = 50;
        }

        else if (nextCheckpointAngle < -67.5 || nextCheckpointAngle > 67.5) { // 67.5Deg Angle Manuveure
            var thrust = 70;
        }

        else if (nextCheckpointAngle < -45 || nextCheckpointAngle > 45) { // 45Deg Angle Manuveure
            var thrust = 80;
        }

        else if (nextCheckpointAngle < -22.5 || nextCheckpointAngle > 22.5) { //22.5Deg Angle Manuveure
            var thrust = 90;
        }

        else if (nextCheckpointAngle > -22.5 || nextCheckpointAngle < 22.5) { //22.5Deg Angle Manuveure
            var thrust = 95;
        }


    }

    /*else if (nextCheckpointDist < 1600 && nextCheckpointDist > 1200) {
     var thrust = thrust - (thrust * .3);
     }

     else if (nextCheckpointDist < 1200 && nextCheckpointDist > 400) {
     var thrust = thrust - (thrust * .5);
     }

     else if (nextCheckpointDist < 400 && nextCheckpointDist > 0) {
     var thrust = thrust - (thrust * 7);
     }*/




    else {
        thrust = 100;
    }



    // You have to output the target position
    // followed by the power (0 <= thrust <= 100) or "BOOST"
    // i.e.: "x y thrust"
    print(nextCheckpointX + ' ' + nextCheckpointY + ' ' + thrust;
}
