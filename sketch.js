// CS30 Final Project
// Kalim Pugh
// 11/17/2025
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 5;
let y = 5;
let speed = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("white"); 
  if (keyIsDown(87) === true){
    y = y - speed;
  }
  if (keyIsDown(83) === true){
    y = y + speed;
  }
  if (keyIsDown(65) === true){
    x = x - speed;
  }
  if (keyIsDown(68) === true){
    x = x + speed;
  }
  updatePosition();
}

function updatePosition(){
  fill("black");
  square(x, y, 70);
}


