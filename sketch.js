// CS30 Final Project
// Kalim Pugh
// 11/17/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

// Declaring Variables.

let x = 90;
let y = 90;
let size = 70;
let oldX = x;
let oldY = y;
let speed = 5;
let barrier_X_positions = [];
let barrier_Y_positions = [];
let barrier_widths = [];
let barrier_heights = [];
let mapChangeX = [400,600, 200, 300,300,200,200, 0,700, 100,500,200];
let mapChangeY = [400,600, 200, 300, 600,200,200,600,300, 100,500,200];
let mapChangeWidth = [200,100, 50, 100, 100,100,100,150,80, 100, 50,100];
let mapChangeHeight = [200,100, 50, 100, 100,100,100,150,80, 100, 50,100];
let map = 1;

function setup() {
  createCanvas(800, 800);
  background('#8a8787ff');
}

// Checking for movement.

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

// Constantly Updating position depending on map.

function updatePosition(){
  background('#8a8787ff');
  fill("black");
  if (map === 1){
    fill('red');
    rect(mapChangeX[0], mapChangeY[0], mapChangeWidth[0], mapChangeHeight[0]);
  }
  if (map === 2){
    fill("red");
    rect(mapChangeX[1], mapChangeY[1], mapChangeWidth[1], mapChangeHeight[1]);      
    rect(mapChangeX[2], mapChangeY[2], mapChangeWidth[2], mapChangeHeight[2]);
    rect(mapChangeX[8], mapChangeY[8], mapChangeWidth[8], mapChangeHeight[8]);
  }
  if (map === 3) {
    fill("red");
    rect(mapChangeX[3], mapChangeY[3], mapChangeWidth[3], mapChangeHeight[3]);
    rect(mapChangeX[4], mapChangeY[4], mapChangeWidth[4], mapChangeHeight[4]);
    rect(mapChangeX[7], mapChangeY[7], mapChangeWidth[7], mapChangeHeight[7]);
  }
  if (map === 4){
    fill("red");
    rect(mapChangeX[5], mapChangeY[5], mapChangeWidth[5], mapChangeHeight[5]);
  }
  if (map === 5){
    fill("red");
    rect(mapChangeX[6], mapChangeY[6], mapChangeWidth[6], mapChangeHeight[6]);
  }
  if (map === 6){
    fill("red");
    rect(mapChangeX[9], mapChangeY[9], mapChangeWidth[9], mapChangeHeight[9]);
    rect(mapChangeX[10], mapChangeY[10], mapChangeWidth[10], mapChangeHeight[10]);
  }
  if (map === 7){
    fill("red");
    rect(mapChangeX[11], mapChangeY[11], mapChangeWidth[11], mapChangeHeight[11]);
  }
  fill("blue");
  square(x, y, 70);
}



function mapChange(){
  if (x > mapChangeX[0] - size && x < mapChangeX[0] + mapChangeWidth[0] && y > mapChangeY[0] - size && y < mapChangeY[0] + mapChangeHeight[0] && map === 1){
    map =2;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[1] - size && x < mapChangeX[1] + mapChangeWidth[1] && y > mapChangeY[1] - size && y < mapChangeY[1] + mapChangeHeight[1] && map === 2){
    map = 1;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[2] - size && x < mapChangeX[2] + mapChangeWidth[2] && y > mapChangeY[2] - size && y < mapChangeY[2] + mapChangeHeight[2] && map === 2){
    map = 3;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[3] - size && x < mapChangeX[3] + mapChangeWidth[3] && y > mapChangeY[3] - size && y < mapChangeY[3] + mapChangeHeight[3] && map === 3){
    map = 4;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[4] - size && x < mapChangeX[4] + mapChangeWidth[4] && y > mapChangeY[4] - size && y < mapChangeY[4] + mapChangeHeight[4] && map === 3){
    map = 5;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[5] - size && x < mapChangeX[5] + mapChangeWidth[5] && y > mapChangeY[5] - size && y < mapChangeY[5] + mapChangeHeight[5] && map === 4){
    map = 3;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[6] - size && x < mapChangeX[6] + mapChangeWidth[6] && y > mapChangeY[6] - size && y < mapChangeY[6] + mapChangeHeight[6] && map === 5){
    map = 3;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[7] - size && x < mapChangeX[7] + mapChangeWidth[7] && y > mapChangeY[7] - size && y < mapChangeY[7] + mapChangeHeight[7] && map === 3){
    map = 2;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[8] - size && x < mapChangeX[8] + mapChangeWidth[8] && y > mapChangeY[8] - size && y < mapChangeY[8] + mapChangeHeight[8] && map === 2){
    map = 6;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[9] - size && x < mapChangeX[9] + mapChangeWidth[9] && y > mapChangeY[9] - size && y < mapChangeY[9] + mapChangeHeight[9] && map === 6){
    map = 2;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[10] - size && x < mapChangeX[10] + mapChangeWidth[10] && y > mapChangeY[10] - size && y < mapChangeY[10] + mapChangeHeight[10] && map === 6){
    map = 7;
    console.log(map);
    x = 5;
    y = 5;
  }
  if (x > mapChangeX[11] - size && x < mapChangeX[11] + mapChangeWidth[11] && y > mapChangeY[11] - size && y < mapChangeY[11] + mapChangeHeight[11] && map === 7){
    map = 6;
    console.log(map);
    x = 5;
    y = 5;
  }
}
function checkOnBarrier(){
  if (x > 800 - size|| x < 0 || y > 800 - size|| y < 0){
    x = oldX;
    y = oldY;
  }
}