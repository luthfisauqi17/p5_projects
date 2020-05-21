// Bubble array
let bubbles = [];


// Bubble class
class Bubble {
  constructor(x, y, r = 50) {
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

  intersects(other) {
    let d = dist(this.x, this.y, other.x, other.y);
    return (d < this.r + other.r);
  }
}


// Core
function setup() {
  createCanvas(600, 400);

  for (let i = 0; i <= 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(10, 50);
    bubbles[i] = new Bubble(x, y, r);
  }
}

function draw() {
  background(0);

  for (let bubble of bubbles) {
    let overlapping = false;
    for (let other of bubbles) {
      if (bubble !== other && bubble.intersects(other)) {
        overlapping = true;
      }
    }

    if(overlapping === true) {
      bubble.changeColor(255);
    }
    else {
      bubble.changeColor(0);
    }
    bubble.display();
    bubble.move();
  }
}