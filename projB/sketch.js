let colorPalette = ["#00a9e7"];

let drop = [];
let rain;
let thunder;

let cloudx = -250;
let cloudy = -250;

let arraySize = 500;

let listOfColors = ["#4a6583", "#6c8094", "#4e6881", "#697a8c", "#3c5369"];

function preload() {
	rain = loadSound("rain.mp3");
	thunder = loadSound("thunder.mp3");
}
function CreateThunder() {
	thunder.play();	
}
function displayClouds(){
	CreateClouds(cloudx + 100, cloudy + 80);
	CreateClouds(cloudx + 160, cloudy + 100);
	CreateClouds(cloudx + 90, cloudy + 70);
	CreateClouds(cloudx + 100, cloudy + 90);
	cloudx += 0.4;
}

function CreateClouds(cloudx, cloudy) {
	fill(255)
	noStroke();
	ellipse(cloudx, cloudy, 70, 50);
	ellipse(cloudx + 10, cloudy + 10, 70, 60);
	ellipse(cloudx - 20, cloudy + 10, 70, 50);
	ellipse(cloudx - 30, cloudy + 15, 65, 60);
}


function setup() {
	createCanvas(windowWidth, windowHeight);

	noStroke();
	for (let i = 0; i < arraySize; i++) {
		let randValue = parseInt(random(listOfColors.length));
		let newColor = listOfColors[randValue];
		drop[i] = new Drop(newColor);
	}
}

function draw() {
	background(colorPalette[0]);
	world(0, 0);
	displayClouds();
	
	for (let i = 0; i < arraySize; i++) {
		drop[i].update();
		drop[i].display();
	}
}
function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}



//raindrops:
class Drop {
	constructor(col) {
		this.x = random(-400, 600);
		this.y = random(0);
		this.alpha = random(255);
		this.speed = random(5, 60);
		this.fillColor = col;
		this.ellipseSize = 0;
	}

	update() {
		this.y = this.y + this.speed;
		if (this.y > windowHeight) {
			this.y = -400;
		}
	}

	display() {
		noStroke();
		fill(this.fillColor);
		ellipse(this.x, this.y, 2, 8);
	}
}

function world() {
	noStroke();
	//mountains
	fill("#939598");
	triangle(360, 170, 580, 550, 230, 440);
	fill("#536486")
	triangle(360, 170, 360, 550, 230, 440);


	fill("#FFFFFF");
	beginShape();
	vertex(360, 170);
	vertex(395, 230);
	vertex(360, 225)
	vertex(340, 250);
	vertex(330, 230);
	vertex(310, 270)
	endShape(CLOSE);

	fill("#939598");
	triangle(580, 130, 760, 450, 430, 440);
	fill("#536486")
	triangle(580, 130, 590, 450, 430, 440);

	fill("#FFFFFF");
	beginShape();
	vertex(580, 170);
	vertex(555, 180);
	vertex(580, 130)
	vertex(612, 190);
	vertex(589, 180);
	//vertex(610,170)
	endShape(CLOSE);


	//bottom floor
	fill("#736258")
	rect(180, 630, 640, 40, 50)

	//upper floors
	fill("#00bd3f")
	rect(150, 600, 700, 35, 50)

	fill("#77ce1f")
	rect(140, 555, 730, 45, 50)

	fill("#009b3e")
	rect(170, 525, 670, 30, 50)

	//hills
	fill("#242326")
	arc(600, 525, 400, 270, PI, 0, OPEN);


	fill("#70954b")
	arc(400, 525, 390, 200, PI, 0, OPEN);

	fill("#70954b")
	arc(300, 525, 240, 220, PI, 0, OPEN);

	fill("#77ce1f");
	arc(360, 525, 240, 235, PI, 0, OPEN);

	fill("#70954b")
	arc(700, 525, 240, 180, PI, 0, OPEN);

	fill("#77ce1f");
	arc(650, 525, 240, 205, PI, 0, OPEN);

	//lake
	//fill("#0071c2")
	//arc(700, 525, 240, 180, 0, PI, OPEN);



	//trees
	translate(120, 320)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 172, 20, 20);
	ellipse(323, 192, 30, 20);
	ellipse(331, 182, 20, 20);

	translate(-50, -40)
	fill(67, 51, 8);
	rect(320, 194, 10, 30);
	fill(23, 69, 29);
	ellipse(327, 182, 20, 20);
	ellipse(323, 199, 30, 20);
	ellipse(331, 189, 20, 20);

	translate(-30, 30)
	fill(67, 51, 8);
	rect(320, 194, 12, 25);
	fill(23, 69, 29);
	ellipse(327, 192, 20, 20);
	ellipse(323, 181, 30, 20);
	ellipse(331, 179, 20, 20);

	translate(-60, -50)
	fill(67, 51, 8);
	rect(320, 194, 10, 30);
	fill(23, 69, 29);
	ellipse(328, 186, 20, 20);
	ellipse(325, 195, 30, 20);
	ellipse(330, 184, 20, 20);

	translate(80, -30)
	fill(67, 51, 8);
	rect(320, 194, 10, 30);
	fill(23, 69, 29);
	ellipse(325, 180, 20, 20);
	ellipse(324, 190, 30, 20);
	ellipse(331, 189, 20, 20);

	translate(-150, 50)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 172, 20, 20);
	ellipse(323, 192, 30, 20);
	ellipse(331, 182, 20, 20);

	translate(260, -20)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 177, 20, 20);
	ellipse(323, 188, 30, 20);
	ellipse(331, 178, 20, 20);

	translate(30, 30)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 192, 20, 20);
	ellipse(323, 192, 30, 20);
	ellipse(331, 182, 20, 20);

	translate(50, 30)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(320, 172, 20, 20);
	ellipse(323, 192, 30, 20);
	ellipse(331, 182, 20, 20);

	translate(30, -35)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 172, 20, 20);
	ellipse(331, 192, 30, 20);
	ellipse(323, 182, 20, 20);

	translate(40, -43)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 172, 20, 20);
	ellipse(323, 192, 30, 20);
	ellipse(331, 182, 20, 20);

	translate(15, 55)
	fill(67, 51, 8);
	rect(320, 194, 10, 20);
	fill(23, 69, 29);
	ellipse(327, 177, 20, 20);
	ellipse(323, 188, 30, 20);
	ellipse(331, 178, 20, 20);

	translate(60, 0)
	fill(67, 51, 8);
	rect(320, 194, 10, 30);
	fill(23, 69, 29);
	ellipse(327, 182, 20, 20);
	ellipse(323, 199, 30, 20);
	ellipse(331, 189, 20, 20);



}