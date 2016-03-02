var x = [];
var y = [];
var sizes = [];

function setup() {
  createCanvas (windowWidth, windowHeight);
}

function draw() {
  background(200,20,36);
  for (var i = 0; i < y.length; i++) {
    if (dist(x[i], y[i], mouseX, mouseY) > 40) {
      fill (255);
    }
    else {
      fill (22, 150, 255);
    }
    ellipse(x[i], y[i], 80, 80);
    y[i] = y[i] + .5;
  }

}

function mousePressed() {
  x.push(mouseX);
  y.push(mouseY);
}