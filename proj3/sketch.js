let x, y;
let xSpd, ySpd;
let dia;

let R, G, B;

function setup() {
  let canvas = createCanvas(600, 600);
  canvas.id("p5-canvas");
  background("#D0D2D6");
  frameRate(30);
  //setupGif(30);   // 30 [fps] is how fast the gif will play back
  x = 150;
  y = 100;
  xSpd = random(-5, 5);
  ySpd = random(-5, 5);
  dia = 25;
}

function changeCol() {
  R = random(0, 255);
  G = random(0, 255);
  B = random(0, 255);
}

function draw() {
  //beginGif();
  x = x + xSpd;
  y = y + ySpd;

  if (x < 0 || x > width) {
    xSpd = xSpd * -1;
    changeCol();
  }
  if (y < 0 || y > height) {
    ySpd = ySpd * -1;
    changeCol();
  }
  fill(R, G, B);
  circle(x, y, dia);
  
  //endGif(600);    // this stops recording after 300 times through draw

}
