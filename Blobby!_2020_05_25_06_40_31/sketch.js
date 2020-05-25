let yoff = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  fill(255);
  noStroke();

  push();

  translate(200, 200);

  beginShape();
  let xoff = 0;
  for (let a = 0; a < TWO_PI; a += 0.1) {
    let offset = map(noise(xoff + yoff), 0, 1, -25, 25);
    // let offset = map(sin(a*10 + frameCount * 0.01), -1, 1, -25, 25);
    let r = 50 + offset;
    let x = r * cos(a);
    let y = r * sin(a);
    vertex(x, y);
    // ellipse(x, y, 4, 4);
    xoff += 0.1;
  }
  endShape();
  pop();
  yoff += 0.01;
}