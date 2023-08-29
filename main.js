var canvas;
var video;
var poseNet;
var diferenca = 0;
var pulsoDx = 0;
var pulsoEx = 0;

function setup() {
    canvas = createCanvas(500, 600);
    canvas.position(560, 150);
    video = createCapture(VIDEO);
    video.size(550, 500);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Pose net foi inicializado");
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        pulsoEx = results[0].pose.leftWrist.x;
        pulsoDx = results[0].pose.rightWrist.x;
        diferenca = floor(pulsoEx - pulsoDx);
    }
}

function draw() {
    background("gray");
    document.getElementById("text").innerHTML = "O tamanho o texto sera: " + diferenca + " px";
    textSize(diferenca);
    fill("white");
    text("Luiz Felipe", 50, 400);
}