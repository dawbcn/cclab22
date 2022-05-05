
//set variables

let drop = [];
let ripple = [];
let rippleSize = 4;
let arraySize = 300;
let counterToAddRipples = 0;

let img;
let sky;
let rain;
let thunder;

let listOfColors = ["#4a6583", "#6c8094", "#4e6881", "#697a8c", "#3c5369"];

//preload sound/images
function preload() {
  img = loadImage("wetcobble.jpeg");
  sky = loadImage("skyv2.jpeg");

  rain = loadSound("rain.mp3");
  thunder = loadSound("thunder.mp3");
}

function CreateThunder() {
  thunder.play();
  background(255);
}

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.id("p5-canvas");

  rain.setVolume(1);
  rain.play();
  //rain.loop()

  noStroke();
  for (let i = 0; i < arraySize; i++) {
    let randValue = parseInt(random(listOfColors.length));
    let newColor = listOfColors[randValue];
    drop[i] = new Drop(newColor);
  }

  for (let i = 0; i < rippleSize; i++) {
    let newX = random(10, width);
    let newY = random(450, height);
    ripple.push(new Ripple(newX, newY));
    ripple[i].initialSpeed();
  }
}

function draw() {
  background("#010415");

  //tint(255,120);
  image(img, 0, 405);

  for (let i = 0; i < ripple.length; i++) {
    ripple[i].update();
    ripple[i].display();

    if (ripple[i].kill) {
      ripple.splice(i, 1);
    }
  }

  counterToAddRipples++;

  if (counterToAddRipples % 5 == 0) {
    let newX = random(10, width);
    let newY = random(450, height);
    ripple.push(new Ripple(newX, newY));
    ripple[ripple.length - 1].initialSpeed();
  }

  //tint(255,58);
  image(sky, 0, 0);

  for (let i = 0; i < arraySize; i++) {
    drop[i].update();
    drop[i].display();
  }
  fill("#192030");
  textSize(15);
  //text("CLICK YOUR MOUSE TO SUMMON LIGHTNING !", 150, 30);

  if (mouseIsPressed == true) CreateThunder();
}

//create raindrops
class Drop {
  constructor(col) {
    this.x = random(width);
    this.y = random(-50, -height);
    this.alpha = random(255);
    this.speed = random(5, 40);
    this.fillColor = col;
    this.ellipseSize = 0;
  }

  update() {
    this.y = this.y + this.speed;
    if (this.y > height) {
      this.y = -10;
    }
  }

  display() {
    noStroke();
    fill(this.fillColor);
    ellipse(this.x, this.y, 2, 8);
  }
}

//create ripples/impacts
class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.ellipseSizeX = [];
    this.ellipseSizeY = [];
    this.counter = [];
    this.speed = [];
    this.kill = false;
    this.life = [];
  }

  initialSpeed() {
    for (let i = 0; i < 1; i++) {
      this.speed[i] = random(1);
      this.ellipseSizeX[i] = 0;
      this.ellipseSizeY[i] = 0;
      this.counter = 0;
      this.life = random(30, 60);
    }
  }

  update() {
    for (let i = 0; i < 4; i++) {
      this.ellipseSizeX[i] = 1 + this.ellipseSizeX[i] + this.speed[i];
      this.ellipseSizeY[i] = this.ellipseSizeY[i] + this.speed[i];
    }
    this.counter++;

    if (this.counter > this.life) {
      this.kill = true;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    noFill();
    stroke(255);
    strokeWeight(0.5);
    for (let i = 0; i < 4; i++) {
      ellipse(0, 0, this.ellipseSizeX[i], this.ellipseSizeY[i]);
    }
    pop();
  }
}
