let colorPalette = ["#FF00FF", "#FFFF00", "#00FFFF"];

function preload() {
	//audio = loadSound("audio/DEMO_1.mp3");
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//fft = new p5.FFT();
	//audio.loop();
}

function draw() {
	background(colorPalette[1]);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}
