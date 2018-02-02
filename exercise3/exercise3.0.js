// declare variables xPos and yPos
var xPos = 200; 
var yPos = 200; 
// declare a var called xSpeed;
var xSpeed; 
// declare a var called ySpeed
var ySpeed; 
// declare a variable called img 
var img;
// declare a var for image width, assign 40 
// declare a var for image height, assign 30
var imgW = 40;
var imgH = 30;


function preload (){img = loadImage('assets/myIMG.png');}
function setup() {
	createCanvas(400,400);
xSpeed = random(1,10);
ySpeed = random(1,10);
}

function draw(){
	background(0);                
image(img, xPos, yPos, width, height)

xSpeed += xPos;
ySpeed += yPos

  if (xPos+imgW/2 >= width || xPos-imgW/2 <= 0){    // if we reach the edge of the canvas
    xSpeed *= -1;                                 // turn around (toggle xSpeed negative to positive)
  }
  if (yPos+imgH/2 >= height || yPos-yimgH/2 <= 0){    // same as above, toggle ySpeed 
    ySpeed *= -1;
  }
}