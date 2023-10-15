function setup(){
    video=createCapture(VIDEO);
    video.size(550, 550);
    video.position(100, 112)
    canvas=createCanvas(550, 550);
    canvas.position(750, 112);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized!');
}
function draw(){
    background('#27D600');
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results)
    }
}