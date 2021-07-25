difference = 0;
NoseX = 0;
NoseY = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 175);

    canvas = createCanvas(500, 400);
    canvas.position(800, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model Successfuly Loaded!");
}

function draw() {
    background("#FFFF00");
    textSize(difference);
    fill('#964B00');
    text("Hello", NoseX, NoseY);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = floor(leftwristx - rightwristx);

        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
    }
}