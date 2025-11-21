// CS30 Final Project
// Kalim Pugh
// 11/17/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 50;
let y = 50;
let oldX = x;
let oldY = y;
let speed = 5;
let barrier_X_positions = [200];
let barrier_Y_positions = [200];
let barrier_widths = [400];
let barrier_heights = [80];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white"); 
  if (keyIsDown(87) === true){
    y = y - speed;
    checkOnBarrier();
    oldY = y;
  }
  if (keyIsDown(83) === true){
    y = y + speed;
    checkOnBarrier();
    oldY= y;
  }
  if (keyIsDown(65) === true){
    x = x - speed;
    checkOnBarrier();
    oldX = x;
  }
  if (keyIsDown(68) === true){
    x = x + speed;
    checkOnBarrier();
    oldX = x;
  }
  updatePosition();
}

function updatePosition(){
  fill("black");
  square(x, y, 70);
  rect(barrier_X_positions[0], barrier_Y_positions[0], barrier_widths[0], barrier_heights[0]);
}

function checkOnBarrier(){
  if (x  > barrier_X_positions[0] && x  < barrier_X_positions[0] + barrier_widths[0] && y > barrier_Y_positions[0] && y < barrier_Y_positions + barrier_heights){
    
  }
}


