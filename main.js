nose_x = 0;
nose_y = 0;
difference = 0;
right_wristx = 0;
left_wristx = 0;
function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,550);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('Pose' , GotPoses);
}
function draw(){
    background('cyan');
    document.getElementById("square_sides").innerHTML="Width and Height of a square will be "+difference+"px";
    fill('yellow');
    stroke('red');
    square(nose_x,nose_y,difference);
}
function modelLoaded(){
    console.log("Posenet model is loaded");
}
function GotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("Nose x = "+nose_x+"Nose y = "+nose_y);

        right_wristx = results[0].pose.rightWrist.x;
        left_wristx = results[0].pose.leftWrist.x;
        difference = floor(left_wristx-right_wristx);
        console.log("Left wrist x = "+left_wristx+"Right wrist x = "+right_wristx+"Difference = "+difference);
            }
}