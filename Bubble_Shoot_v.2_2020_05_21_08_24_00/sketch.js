// Bubble array
let bubbles = [];


// Bubble class
class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.brightness = 0
  }

  move() {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
  }

  display() {
    stroke(255);
    strokeWeight(4);
    fill(this.brightness, 125);
    ellipse(this.x, this.y, this.r * 2);
  }

  changeColor(brightness) {
    this.brightness = brightness;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }
}


// Core
function setup() {
  createCanvas(600, 400);

  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);

    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }


}

function draw() {
  background(0);

  for (let bubble of bubbles) {

    if (bubble.contains(mouseX, mouseY)) {
      bubble.changeColor(255);
    } else {
      bubble.changeColor(0);
    }

    bubble.move();
    bubble.display();
  }

}

function mousePressed() {
  for (let i = bubbles.length - 1; i >= 0; i--) {

    if (bubbles[i].contains(mouseX, mouseY)) {
      bubbles.splice(i, 1);
    }
  }
}