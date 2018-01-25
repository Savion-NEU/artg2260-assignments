 /* Programming Basics: Section 2
    Savion Mercedes 
    smsmartkid@gmail.com
    assignment 1 
    beginner website
 */
var x;
var num = 25;
function setup() {
  createCanvas(500, 500);
  background(250);
  noStroke();

  //LAND
  fill(75, 0, 75);
  rect(0, 400, 500, 100);  

  //SKY
  fill(5, 5, 80);
  rect(0, 0, 500, 400);

  //MOUNTAINS
  fill(100, 0, 150);
  triangle(-50, 400, 30, 150, 100, 400)
  triangle(50, 400, 125, 90, 250, 400)
  triangle(175, 400, 275, 150, 375, 400)
  triangle(350, 400, 500, 250, 750, 400);

  fill(90, 0, 90);
  triangle(10, 400, 80, 150, 150, 400)
  triangle(80, 400, 200, 200, 325, 400)
  triangle(225, 400, 275, 225, 350, 400)
  triangle(300, 400, 375, 125, 475, 400)
  triangle(450, 400, 500, 200, 700, 400);

  //LAKE
  fill(150, 100, 0);
  ellipse(400, 450, 300, 50);

  
 //TOWER
 fill(55);
 rect(350, 140, 100, 10);
 
 fill(90);
 rect(350, 150, 100, 10);

 fill(75);
 rect(360, 160, 80, 240);
//gradient of tower
 fill(70);
 rect(360, 180, 80, 20);
  fill(65);
  rect(360, 200, 80, 20);
    fill(60);
    rect(360, 220, 80, 20);
      fill(55);
      rect(360, 240, 80, 20);
        fill(50);
        rect(360, 260, 80, 20);
          fill(45);
          rect(360, 280, 80, 20);
            fill(40);
            rect(360, 300, 80, 20);
              fill(35);
              rect(360, 320, 80, 20);
                fill(30);
                rect(360, 340, 80, 20);
                  fill(25);
                  rect(360, 360, 80, 20);
                    fill(20);
                    rect(360, 380, 80, 20);

  //SUN
  fill(255);
  ellipse(400, 100, 100, 100);
    fill(0, 150, 200);
    ellipse(400, 100, 75, 50);
      fill(0);
      ellipse(400, 100, 35, 35);

  //GRASS
  fill(75, 0, 75);
  x = 0;
  for(var i = 0; i < num; i++) {
    rect(x, 375, 10, 30);
    x += 20;
  }
  fill(75, 0, 75)
  x = 10;
  for(var i = 0; i < num; i++) {
    rect(x, 395, 10, 30);
    x += 20;
  }

 
}
