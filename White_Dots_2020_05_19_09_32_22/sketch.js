let dot = {
  x: 0,
  y: 0,
  size: 5
}

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  dot.x = floor(random(400));
  dot.y = floor(random(400));
  fill(255);
  ellipse(dot.x, dot.y, dot.size, dot.size);
}