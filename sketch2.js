var x = [],
  y = [],
  segNum = 20,
  segLength = 18;

for (var i = 0; i < segNum; i++) {
  x[i] = 0;
  y[i] = 0;
}

function setup() {
  createCanvas(710, 400);
  strokeWeight(9);
  stroke(255, 100);
}

function draw() {
  background(0);
  dragSegment(0, mouseX, mouseY);
  for( var i=0; i<x.length-1; i++) {
    dragSegment(i+1, x[i], y[i]);
  }
  
  stroke(100, 200);
  for (var i =0; i < 6; i++) {
    
    rect(0, i * 100, 1000, 10);
  }
}

function dragSegment(i, xin, yin) {
  var dx = xin - x[i];
  var dy = yin - y[i];
  var angle = atan2(dy, dx);
  x[i] = xin - cos(angle) * segLength;
  y[i] = yin - sin(angle) * segLength;
  segment(x[i], y[i], angle);
}

function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}
