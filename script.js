var button;

function setup() {
  createCanvas(400, 300);
  background(240);

  button = createButton("Plopp!");
  button.position(20, 20);
  button.class("buttonCSS");
  button.mousePressed(plopp);
}

function draw() {
}

function plopp() {
  fill(random(255), random(255), random(255));
  ellipse(random(width), random(height), random(10,60));
}