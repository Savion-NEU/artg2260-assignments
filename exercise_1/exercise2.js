//exercise 2 in class

function setup(){
	createCanvas(300, 300);
	for (var y = 0; y < 300; y += 20){
		for (var x = 0; x < 300; x += 10){
			fill(((x + y) * .3), ((x + y) * 5), ((x + y) * .7));
			ellipse(x, y, 20, 20);
		}
	}

}