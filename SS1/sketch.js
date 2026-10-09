// Name: Joshua B
// Title: On a Stroll
// We have a person walking outside

function setup() {
  // createCanvas -- creates a canvas of specified width and height
  createCanvas(500, 500);
}

function draw() {
  background(173, 216, 230);

// circle -- two sets of coordinates and a diameter
  strokeWeight(8);
  stroke("yellow");
  fill("yellow")
  circle(475, 25, 100);

 // circle -- two sets of coordinates and a diameter
   strokeWeight(8);
   stroke("black")
  fill("pink")
  circle(100, 200, 100);

 // ellipse -- two sets of coordinates and a width and height
  strokeWeight(8);
  fill("lime")
  ellipse(300, 450, 1000, 150);

  // rect -- two sets of coordinates and a width and height
  strokeWeight(5);
  fill("green")
  rect(50, 250, 100, 100);

  strokeWeight(5);
  fill("blue")
  rect(50, 350, 50, 100);

  strokeWeight(5);
  fill("blue")
  rect(100, 350, 50, 100);

  strokeWeight(5);
  fill("green")
  rect(150, 250, 50, 100);

  strokeWeight(5);
  fill("green")
  rect(0, 250, 50, 100);

}