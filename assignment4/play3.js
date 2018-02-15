//object Oriented Collision

let gameState = 0;
let score = 0;

var rects = [];
var numRects = 50;
var cir;

function setup() {
	framerate = 10;
	createCanvas(600,600);

	for(i=0;i<numRects;i++){
		r = new rectObj(random(width),random(-600, 0), random(10,30), random(10,30) ) // generate a rectObj
		rects.push(r); //add it to the array.
	}

	cir = new circleObj(20);// create a new circle object
	console.log(rects);
}

function draw(){
	background(255);

	for(i=0;i<numRects;i++){
		rects[i].disp();
		rects[i].collide( cir ); //collide with the mouse's ellipse
	}

	cir.disp(mouseX,mouseY); //pass the x,y pos in to the ellipse
  
  if (gameState == 0){
    startScreen();
    
  } else if (gameState == 1){
    update();
  } else if (gameState == 2){
    gameOver();
    
  }
}



function startScreen(){
    text("Click to Begin", 300, 500);
}

function update(){
  
  score++;
  text("Playing", 300, 500);
  text("Score: " + score, 300, 550);
}

function gameOver(){
  background(255);
  text("Game Over", 300, 500);
  text("Score: " + score, 300, 550);
}

function mouseClicked(){
 if (gameState == 0){
   gameState = 1;
 } else if (gameState == 2){
   gameState = 0;
 }
 score = 0;
}

function rectObj(x,y,w,h){
	this.x = x
	this.y = y
	this.w = w
	this.h = h
	this.color = color(0, 0,random(200))
	this.hit = false;

	this.collide = function(obj){

		this.hit = collideRectCircle(this.x, this.y, this.w, this.h, obj.x, obj.y, obj.dia); //collide the cir object into this rectangle object.

		if(this.hit){
			//this.color = color(0) //set this rectangle to be black if it gets hit
		    
      gameState = 2;
    
		}

	}

	this.disp = function(){
		noStroke();
		fill(this.color);
		this.y += 7 //move downwards 
		if(this.y > height){ //loop downwards
			this.y = -this.h;
		}
		rect(this.x,this.y,this.w,this.h);

	}

}

function circleObj(dia){
	this.dia = dia;
	this.color = color(random(255),random(255),random(255))
	this.x;
	this.y;

	this.disp = function(x,y){
		this.x = x;
		this.y = y;
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.dia,this.dia);
	}

}


