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
let barrier_X_positions = [200, 400, 200, 300];
let barrier_Y_positions = [200, 240, 200, 300];
let barrier_widths = [400, 200, 100, 100];
let barrier_heights = [80, 120, 100 , 100];
let mapChangeX = [400];
let mapChangeY = [400];
let mapChangeWidth = [200];
let mapChangeHeight = [200];
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
    mapChange();
    oldY = y;
  }
  if (keyIsDown(83) === true){
    y = y + speed;
    checkOnBarrier();
    mapChange();
    oldY= y;
  }
  if (keyIsDown(65) === true){
    x = x - speed;
    checkOnBarrier();
    mapChange();
    oldX = x;
  }
  if (keyIsDown(68) === true){
    x = x + speed;
    checkOnBarrier();
    mapChange();
    oldX = x;
  }
  updatePosition();
}

function updatePosition(){
  background('#8a8787ff');
  fill("black");
  if (map === 1){
    rect(barrier_X_positions[0], barrier_Y_positions[0], barrier_widths[0], barrier_heights[0]);
    rect(barrier_X_positions[1], barrier_Y_positions[1], barrier_widths[1], barrier_heights[1]);
    fill('red');
    rect(mapChangeX[0], mapChangeY[0], mapChangeWidth[0], mapChangeHeight[0]);
  }
  if (map === 2){
    rect(barrier_X_positions[2], barrier_Y_positions[2], barrier_widths[2], barrier_heights[2]);
    rect(barrier_X_positions[3], barrier_Y_positions[3], barrier_widths[3], barrier_heights[3]);
  }
  fill("blue");
  square(x, y, 70);
}

function mapChange(){
  if (x > mapChangeX[0] - size && x < mapChangeX[0] + mapChangeWidth[0] && y > mapChangeY[0] - size && y < mapChangeY[0] + mapChangeHeight[0]){
    console.log("Works");
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
    if (x  > barrier_X_positions[3] - size && x < barrier_X_positions[3] + barrier_widths[3] && y > barrier_Y_positions[3] - size  && y < barrier_Y_positions[3] + barrier_heights[3]){
      x = oldX;
      y = oldY;
    }
  }
}