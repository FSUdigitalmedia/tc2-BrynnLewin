function setup() {
  //created a canvas 600 pixels wide
  //and 400 pixels high
  createCanvas(600, 400);
}

function draw() {
  //sky blue backgrounf
  background(135, 206, 235);
  //sun in top-right corner
  fill("yellow")
  stroke("orange")
  strokeWeight(20)
  circle(550, 50, 100);
  //grass on bottom half
  fill("green")
  stroke(0)
  strokeWeight(1)
  rect(0, 200, 600, 200)
  //emojis
  textSize(75)
  text("🌸", 100, 250); //flower
  text ("🐞", mouseX, mouseY); //ladybug interactive
}
