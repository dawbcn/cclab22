let a = "#1e81b0";
let b = "#21130d";
let c = "#abdbe3";
let d = "#eab676";
let finalColor = "FFFFFF";

function setup() {
  createCanvas(400, 400);
  background(220);
  
  stroke("34675C");
  strokeWeight(3.5);
}

function draw() {
  stroke(finalColor)

  if (mouseIsPressed == true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }

  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      finalColor = a;
    }
    if (keyCode == DOWN_ARROW) {
      finalColor = b;
    }
    if (keyCode == LEFT_ARROW) {
      finalColor = c;
    }
    if (keyCode == RIGHT_ARROW) {
      finalColor = d;
    }
  }
}
