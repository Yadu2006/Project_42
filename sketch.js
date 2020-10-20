var hr, mn, sc;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);

  translate(200, 200);
  rotate(-90);

  noFill();
  stroke(255, 0, 100);
  arc(0,0, 300, 300, 0, 0);

  hr = hour();
  mn = minute();
  sc = second(); 
  
  hrAngle = map(hr, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);

  push();
  rotate(scAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 100, 0)
  pop();

  push();
  rotate(mnAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 75, 0)
  pop();

  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 50, 0)
  pop();
  
  drawSprites();
}