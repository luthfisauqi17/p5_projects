let stack = [];
let screenWidth;
let screenHeight;

class StackElement {
  constructor(data) {
    this.data = data;
    this.width = 30;
    this.height = 20;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
  }

  display(x, y) {
    fill(this.r, this.g, this.b);
    rect(x, y, this.width, this.height);
    fill(255);
    text(this.data, x + 35, y + 15);
  }
}

function setup() {
  screenWidth = windowWidth;
  screenHeight = windowHeight;
  createCanvas(screenWidth, screenHeight);
  frameRate(2);
}

function draw() {
  background(51);

  let data = floor(random(50));
  let flag = floor(random(0, 2));

  console.log(flag)

  if (flag == 0) {
    if (stack.length <= 10) {
      addElemToStack(data);
      fill(144,238,144);
      text("Push " + data + " to the stack", screenHeight / 2, (screenHeight / 2) + 50);
    }
  } else {
    if (stack.length > 0) {
      removeElemFromStack();
      fill(255, 204, 203);
      text("Pop " + data + " from the stack", screenHeight / 2, (screenHeight / 2) + 50);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    let x = screenHeight / 2;
    let y = (screenHeight / 2) - i * 20;
    stack[i].display(x, y);
  }
  console.log(stack);
}

function addElemToStack(data) {
  let stack_element = new StackElement(data);
  stack.push(stack_element);
}

function removeElemFromStack() {
  stack.pop();
}