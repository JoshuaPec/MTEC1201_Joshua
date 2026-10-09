// Joshua B
// Moving Circle Example
// I just made a moving circle that works with every click to reset its position
// Press the screen to reset the circle's position

//Starting Pos
let x = 600;
let y = 600;
let z = 600;

//Canvas
function setup() {
  createCanvas(600, 600);
}

//Circle Going Up
function draw() {
  background(220);
  fill(255, 0, 0);
  circle(mouseX, y, 75);
  x = x - 0.8;
  y = y - 0.8;
  z = z - 0.8;
}

//Reset Circle
function mousePressed() {
  x = 600;
  y = 600;
  z = 600;
}

