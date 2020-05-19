// Bubble array
let bubbles = [];

// Color
let color = {
  r: 0,
  g: 0,
  b: 0
}

// Start indicator
let start = true;


// Bubble class
class Bubble {
  constructor(x, y, r, red, green, blue) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.red = red;
    this.green = green;
    this.blue = blue;
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  display() {
    stroke(this.red, this.green, this.blue);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.r * 2);
  }
}


// Core
function setup() {
  createCanvas(600, 400);

}

function draw() {
  background(0);
  
  for (let bubble of bubbles) {
    bubble.move();
    bubble.display();
  }
  
  strokeWeight(2);
  stroke(255);
  textSize(32);
  
  if(start) {
    text("Click mouse to spawn bubble", 80, 200);
    if(mouseIsPressed) {
      start = false;
    }
  }
  
  text("Bubble count: " + bubbles.length, 10, 30);

}

// Event listener
function mousePressed() {
  color.r = random(255);
  color.g = random(255);
  color.b = random(255);  
  let r = random(10, 40);
  let b = new Bubble(mouseX, mouseY, r, color.r, color.g, color.b);
  bubbles.push(b);
}
