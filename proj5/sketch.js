let yellow = "#FFE633";
let blue = "#3379FF";
let white = "#FFFFFF";
let red = "#C70039";
let black = "#0C0101";
let brown = "#7C4C05";
let colorArray = [yellow, blue, white, red, black, brown];

function setup() {
  createCanvas(750, 650);
}

function draw() {
  background("#3F7CBD");
  noCursor();
  drawCreature(mouseX, mouseY, 0, 1);
}

function drawCreature(x, y, angl, scl) {
  push();
  translate(x, y);
  drawLimbs (0, 0,);
  drawSponge(0, 0);
  drawClothes(0, 0);
}
function drawSponge(x, y) {
  push();

  //body/sponge
  fill(colorArray[0]);
  rect(30, 20, 300, 300, 15);

  //eye
  fill(colorArray[2]);
  ellipse(130, 140, 70, 80);
  ellipse(220, 140, 70, 80);

  //eyeball
  fill(colorArray[1]);
  ellipse(220, 140, 30, 30);
  ellipse(130, 140, 30, 30);

  //pupil
  fill(colorArray[4]);
  ellipse(220, 140, 10, 10);
  ellipse(130, 140, 10, 10);

  //nose
  fill(colorArray[0]);
  ellipse(175, 170, 30, 30);

  //mouth
  fill(colorArray[4]);
  line(90, 210, 260, 210);

  //teeth
  fill(colorArray[2]);
  rect(150, 210, 20, 30);
  rect(180, 210, 20, 30);

  pop();
}

function drawClothes(x, y) {
  push();

  //shirt
  fill(colorArray[2]);
  rect(30, 300, 300, 50);
  triangle(0, 300, 30, 350, 30, 300);
  triangle(360, 300, 330, 350, 330, 300);

  //pants
  fill(colorArray[5]);
  rect(30, 350, 300, 70);
  rect(80, 420, 65, 30);
  rect(210, 420, 65, 30);

  //tie
  fill(colorArray[3]);
  triangle(200, 300, 150, 300, 175, 330);
  triangle(190, 380, 160, 380, 175, 330);

  //socks
  fill(colorArray[2]);
  rect(100, 510, 30, 30);
  rect(225, 510, 30, 30);

  //shoes
  fill(colorArray[4]);
  ellipse(100, 550, 70, 35);
  ellipse(255, 550, 70, 35);

  pop();
}

function drawLimbs(x, y) {
  push();

  //legs
  fill(colorArray[0]);
  rect(100, 450, 30, 70);
  rect(225, 450, 30, 70);

  //arms
  fill(colorArray[0]);
  rect(5, 300, 20, 160);
  rect(335, 300, 20, 160);

  pop();
}
