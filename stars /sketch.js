var xs = [];
var ys = [];
var starx = [];
var stary = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  for (var i = 0; i < 30; i++){
  xs.push(random(width));
  ys.push(random(height));
  }
  
  for (var z = 0; z < 20; z++){
    starx.push(random(1,5));
    stary.push(random(1,5));
  }

}

function draw() {
  background(0);

  fill(255);
  for (var i = 0; i < 30; i++){
        ellipse(xs[i], ys[i], starx[i], stary[i]);
    xs[i] = xs[i] + .5;
    ys[i] = ys[i] + .5;
    starx[i] = starx[i] + random(-.5,.5);
    stary[i] = stary[i] + random(-.5,.5);
    
    
    if (mouseX < width/2) {
      xs[i] = xs[i] - (mouseX*0.01);
    }
  }
}