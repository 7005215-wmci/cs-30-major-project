// CS30 Final Project
// Kalim Pugh
// 11/17/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 90;
let y = 90;
let size = 70;
let oldX = x;
let oldY = y;
let speed = 5;
let barrier_X_positions = [200, 400];
let barrier_Y_positions = [200, 240];
let barrier_widths = [400, 200];
let barrier_heights = [80, 120];
let map = 1;

function setup() {
  createCanvas(800, 800);
  background('#8a8787ff');
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
  background('#8a8787ff');
  fill("blue");
  square(x, y, 70);
  fill("black");
  if (map === 1){
    rect(barrier_X_positions[0], barrier_Y_positions[0], barrier_widths[0], barrier_heights[0]);
    rect(barrier_X_positions[1], barrier_Y_positions[1], barrier_widths[1], barrier_heights[1]);
  }
}

function checkOnBarrier(){
  if (x > 800 - size|| x < 0 || y > 800 - size|| y < 0){
    x = oldX;
    y = oldY;
  }
  if (map === 1){
    if (x  > barrier_X_positions[0] - size && x < barrier_X_positions[0] + barrier_widths[0] && y > barrier_Y_positions[0] - size  && y < barrier_Y_positions[0] + barrier_heights[0]){
      x = oldX;
      y = oldY;
    }
    if (x  > barrier_X_positions[1] - size && x < barrier_X_positions[1] + barrier_widths[1] && y > barrier_Y_positions[1] - size  && y < barrier_Y_positions[1] + barrier_heights[1]){
      x = oldX;
      y = oldY;
    }
  }
  if (map === 2){
    if (x  > barrier_X_positions[2] - size && x < barrier_X_positions[2] + barrier_widths[2] && y > barrier_Y_positions[2] - size  && y < barrier_Y_positions[2] + barrier_heights[2]){
      x = oldX;
      y = oldY;
    }
    if (x  > barrier_X_positions[1] - size && x < barrier_X_positions[1] + barrier_widths[1] && y > barrier_Y_positions[1] - size  && y < barrier_Y_positions[1] + barrier_heights[1]){
      x = oldX;
      y = oldY;
    }
  }
}