//Programming Basics: Section 2
//     Savion Mercedes
//    smsmartkid@gmail.com
//    Assignment 3 animate 
// next steps may include finding a way to change the shape
//  as the items spawn or move throughout

var c;
var d;
var xPos;                      
var yPos;
var xDi = 30;                    
var yDi = 30;
var xSpeed = 1;                  
var ySpeed = 1;  

function setup(){
	createCanvas(500, 500);
	background(0);
	frameRate (30);
	  xPos = width/2;                
  yPos = height/2;               
  xSpeed = random(-10,10);         
  ySpeed = random(-10,10);       
}


function draw(){
fill(random(100, 255), 0, random(100, 255));
	var x = random(mouseX - 100, mouseX + 100);
	var y = random(mouseY - 100, mouseY + 100);
    c = map(mouseX, 0, width, 0, width);
    d = map(mouseY, 0, width, 0, width);

//circles that spawn around primary
	ellipse(x, y, frameCount / 10, frameCount / 10);


//circle that follows mouse
	ellipse(c, d, frameCount / 10, frameCount / 10);
fill(random(255));

  ellipse(xPos, yPos, frameCount/2, frameCount/2);   // draw a circle with a radius that is half the current frame rate at coordinate (xPos, yPos)
  xPos += xSpeed;                
  yPos += ySpeed;        
  
  if (xPos+xDi/2 >= width || xPos-xDi/2 <= 0){    //reflected if it touches the edge
    xSpeed *= -1;                                 
  }
  if (yPos+yDi/2 >= height || yPos-yDi/2 <= 0){    
    ySpeed *= -1;
  }
 



}

