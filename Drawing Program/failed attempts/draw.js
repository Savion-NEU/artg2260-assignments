var selected;

function setup(){
createCanvas(500,500);
}

function draw() {
noStroke();
//red
fill(255,0,0);
rect(0,0,20,20);
//orange
fill(255,165,0);
rect(0,20,20,20);
//yellow
fill(255,255,0);
rect(0,40,20,20);
//green
fill(0,255,0);
rect(0,60,20,20);
//cyan
fill(0,255,255);
rect(0,80,20,20);
//blue
fill(0,0,255);
rect(0,100,20,20);
//magenta
fill(255,0,255);
rect(0,120,20,20);
//brown
fill(165,42,42);
rect(0,140,20,20);
//white
fill(255);
rect(0,160,20,20);
//black
fill(0);
rect(0,180,20,20);
}

function mousePressed (){
  if(collide(0, 0)){
    selected = "red";
  }else if(collide(0, 20)){
    selected = "orange";
  }else if(collide(0, 40)){
    selected = "yellow";
  }//and so on...

}

function mouseDragged() 
{ 
  strokeWeight(10);
  line(mouseX, mouseY, pmouseX, pmouseY);
}

function collide ( x, y) {
//2d
if (mouseX >= x &&         // right of the left edge AND
    mouseX <= x + 20 &&    // left of the right edge AND
    mouseY >= y &&         // below the top AND
    mouseY <= y + 20) {    // above the bottom
        return true;
}
return false;
};