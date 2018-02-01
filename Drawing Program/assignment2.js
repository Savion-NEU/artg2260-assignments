// Programming Basics: Section 2
//     Savion Mercedes
//    smsmartkid@gmail.com
//    Assignment 2
//    Drawing Program 

var c;
var d;
 
function setup() {
 	createCanvas(735, 735);
 	background(255)
 	c = color(0);
 	d = strokeWeight(d)

}
 
function draw()
{
// displays instructions and keys
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("Press any of the 'QWERTASDF' key on your keyboard to change the color", 10, 15);
rect(0,25, width, 45);
//red
	fill(255,0,0)
	rect(0,50,10,10)
	text("Q",5,45)
//orange
	fill(255,165,0)
	rect(10,50,10,10)
	text("W",15,45)
//yellow
	fill(255,255,0)
	rect(20,50,10,10)
	text("E",25,45)
//green
	fill(0,255,0)
	rect(30,50,10,10)
	text("R",35,45)
//blue
	fill(0,0,255)
	rect(40,50,10,10)
	text("T",45,45)
//violet
	fill(238,130,238)
	rect(50,50,10,10)
	text("A",55,45)
//brown
	fill(165,42,42)
	rect(60,50,10,10)
	text("S",65,45)
//white
	fill(255)
	rect(70,50,10,10)
		text("D",75,45)	
//black
	fill(0)
	rect(80,50,10,10)
	fill(255)
	text("F",85,45)

//stroke 5
fill(255)
text("stroke 5 (Z)", 150, 45)
//stroke d10
text("stroke 10 (X)", 250, 45)
//stroke 20	
text("stroke 20 (C)", 350, 45)
//stroke 100
text("stroke 100 (V)", 450, 45)
//clear
text("clear (O)", 550, 45)
//save
text("save (P)", 650, 45)
}
 
function mouseDragged() 
{ 
//the actual drawing function	
	strokeWeight(d);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
//if capital or lowercase are pressed then action occurs 
function keyPressed()
{
	if(key == 'q' || key == 'Q')
	{
		c = color(255, 0, 0);
	}
	else if(key == 'w' || key == 'W')
	{
		c = color(255,165,0);
	}
	else if(key == 'e' || key == 'E')
	{
		c = color(255,255,0);
	}
	else if(key == 'r' || key == 'R')
	{
		c = color(0,255,0);
	}
	else if(key == 't' || key == 'T')
	{
		c = color(0,0,255);
	}
	else if(key == 'a' || key == 'A')
	{
		c = color(238,130,238);
	}
	else if(key == 's' || key == 'S')
	{
		c = color(165,42,42);
	}
	if(key == 'z' || key == 'Z')
	{
		d = strokeWeight(5);
	}
	else if(key == 'x' || key == 'X')
	{
		d = strokeWeight(10);
	}
	else if(key == 'c' || key == 'C')
	{
		d = strokeWeight(20);
	}
	else if(key == 'v' || key == 'V')
	{
		d = strokeWeight(100);
	}	
	else if(key == 'd' || key == 'D')
	{
		c = color(255);
	}
	else if(key == 'f' || key == 'F')
	{
		c= color(0);
	}
	else if(key == 'o' || key == 'O')
	{
		createCanvas(600, 600);
	}
	else if(key == 'p' || key == 'P')
	{
		save('myCanvas.jpg');
	}	
 }
