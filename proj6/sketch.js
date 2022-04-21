

let dancer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dancer = new SpongeBob(width / 2, height / 2);
}

function draw() {
  background(0);
  dancer.update();
  dancer.display();
}

class SpongeBob {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
  }

  update() {
    this.sway = 12 * sin(frameCount / 7);
    this.sway2 = 30 * sin(frameCount / 4);
  }
  display() {
    this.drawSponge(0, 0);
    this.drawUpperbody(0, 0);
    this.drawLower(0, 0);
  }

  drawSponge(x, y) {
    push();
    scale(0.3);
    translate(1040, 780);

    //body/sponge
    fill("#FFE633");
    rect(30, 20, 300, 300, 15);

    //eye
    fill("FFFFFF");
    ellipse(130, 140, 70, 80);
    ellipse(220, 140, 70, 80);

    //eyeball
    fill("#3379FF");
    ellipse(220, 140, 30, 30);
    ellipse(130, 140, 30, 30);

    //pupil
    fill("#0C0101");
    ellipse(220, 140, 10, 10);
    ellipse(130, 140, 10, 10);

    //nose
    fill("#FFE633");
    ellipse(175, 170, 30, 30);

    //mouth
    fill("#0C0101");
    line(90, 210, 260, 210);

    //eyebrows
    fill("#0C0101");
    curve(500, 210, 100, 100, 170, 95, 260, 310);
    curve(100, 310, 270, 100, 180, 95, 200, 310);

    //teeth
    fill("FFFFFF");
    rect(150, 210, 20, 30);
    rect(180, 210, 20, 30);

    pop();
  }

  drawUpperbody(x, y) {
    push();
    scale(0.3);
    translate(1040, 800);

    //arms
    fill("#FFE633");
    rect(5, 300, 20, 160 + this.sway2);
    rect(335, 300, 20, 160 + this.sway2);

    //shirt
    fill("#3379FF");
    rect(30, 300, 300, 50);
    triangle(0, 300, 30, 350, 30, 300);
    triangle(360, 300, 330, 350, 330, 300);

    //pants
    fill("#036018");
    rect(30, 350, 300, 70);
    rect(80, 420, 65, 30);
    rect(210, 420, 65, 30);

    pop();
  }

  drawLower(x, y) {
    push();
    scale(0.3);
    translate(1040, 795);

    //legs
    fill("#FFE633");
    rect(100, 450, 30, 70);
    rect(225, 450, 30, 70);

    //socks
    fill("FFFFFF");
    rect(100, 510, 30, 30);
    rect(225, 510, 30, 30);

    //shoes
    fill("#7C4C05");
    ellipse(100, 550, 75, 35 + this.sway);
    ellipse(255, 550, 75, 35 + this.sway);
    scale(0);

    pop();
  }
}
