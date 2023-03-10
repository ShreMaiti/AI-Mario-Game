img = "";
marioX = "";
marioY = "";
noseX = "";
noseY = "";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800, 400);
	video.hide()
	video.parent('gameconsole');
	posenet = ml5.poseNet(video, modelLoaded);
	posenet.on('pose', gotPoses);
}

function modelLoaded()
{
	console.log("Model is loaded.");
}

function gotPoses(results)
{
if(results.length>0)
{
	console.log(results);
	noseX = results[0].nose.pose.X;
	noseY = results[0].nose.pose.Y;
}
}


function draw() {
	game()
}






