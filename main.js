nosex=0;
nosey=0;
leftWristX=0;
rightWristX=0;
difference=0;

function setup()
{
     video=createCapture(VIDEO);
     video.size(400,400);
    
     canvas=createCanvas(400,400);
     canvas.position(450,150);

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on('pose',gotPoses);
 }
 function draw()
 {
    background("pink");
    document.getElementById("update").innerHTML="size of the name="+difference+"px";
    fill("red");
    stroke("darkblue");
    text("kaushiki",100,100);
    textSize(difference);
 }
 function modelLoaded()
 {
     console.log('poseNet is initialized');
 }
 function gotPoses(results)
 {
 if(results.length>0)
 {
     console.log(results);
 leftWristX=results[0].pose.leftWrist.x;
 rightWristX=results[0].pose.rightWrist.x;
 difference=Math.floor(leftWristX-rightWristX);
 }
 }