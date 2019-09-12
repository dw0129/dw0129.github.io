var r = 100;
var c1 = 100;
var c2 = 300;
var c3 = 500;

function setup(){
  createCanvas(600,600);
}

function draw(){
  noStroke();
  background(200);

  var h = map(hour(), 0, 24, 0, r); // Map the function hour() to values from 0 - barMax
  var m = map(minute(), 0, 60, 0, r);
  var s = map(second(), 0, 60, 0, r);


  //second
  fill(255,0,0,150) 
  ellipse(c1, c1, r, r)
  fill(255,255,255,255)
  ellipse(c1, c1, s, s)
  
  //minute
  fill(255,255,0,150)
  ellipse(c2, c2, r, r)
  fill(255,255,255,255)
  ellipse(c2, c2, m, m)
  
  //hour
  fill(0,255,255,150)
  ellipse(c3, c3, r, r)
  fill(255,255,255,255)
  ellipse(c3, c3, h, h)
}