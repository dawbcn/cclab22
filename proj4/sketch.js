let rectSize = 90;
let R, G, B;

function setup() {
  createCanvas(600, 600);
  background(242);
  R = random(0, 255);
  G = random(0, 255);
  B = random(0, 255);
  //noStroke();

  for (let x = 0; x <= width; x += rectSize) {
    for (let y = 0; y <= height; y += rectSize) {
      
      push();
      translate(width / 2, height / 2);
      rotate(random(PI));
      fill(R, G, B);
      ellipse(0, 0, random(0, 500), random(0, 150));
      pop();

      push();
      translate(70, 70);
      rotate(random(60));
      fill(random(255), 255, random(255));
      rect(0, 0, 80, 80);
      pop();

      push();
      translate(400, 500);
      rotate(random(60));
      fill(random(255), 255, random(255));
      rect(0, 0, 80, 80);
      pop();

      push();
      translate(500, 200);
      rotate(random(60));
      fill(random(255), 255, random(255));
      rect(0, 0, 80, 80);
      pop();
    
  


//saveCanvas ('Dylan Wagner', 'png');
}
}
}