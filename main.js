function preload(){

}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoadead);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(clown_nose, noseX, noseY, 100, 100);
}

function take_snapshot(){
    save('myFilterImage.png')
}

function modelLoadead(){
    console.log('PoseNet is Initialized')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x-50;
        noseY = results[0].pose.nose.y-30;
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

noseX=0;
noseY=0;

function preload(){
    clown_nose = loadImage('https://i.postimg.cc/0yKqGq8Y/imageedit-1-4999315989.png')
}