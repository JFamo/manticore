function generateKeys(){
	var ids = ["key-one-one","key-one-two","key-one-three","key-two-one","key-two-two","key-two-three","key-two-four","key-two-five","key-three-one","key-three-two","key-three-three","key-three-four","key-three-five","key-three-six","key-three-seven"];
	var thisShape, thisColor;
	for(var i = 0; i < ids.length; i ++){
		thisShape = randomShape();
		thisColor = interpretColor(randomColor());
		if(thisShape == "circle"){
			document.getElementById(ids[i]).innerHTML = '<circle cx="25" cy="25" r="22" style="fill:rgb(' + thisColor.red + ',' + thisColor.green + ',' + thisColor.blue + ');stroke-width:3;stroke:rgb(255,255,255)" />';
		}
		else if(thisShape == "square"){
			document.getElementById(ids[i]).innerHTML = '<rect width="50" height="50" style="fill:rgb(' + thisColor.red + ',' + thisColor.green + ',' + thisColor.blue + ');stroke-width:3;stroke:rgb(255,255,255)" />';
		}
		else{
			document.getElementById(ids[i]).innerHTML = '<polygon points="25 7.5, 50 48, 0 48" class="triangle" style="fill:rgb(' + thisColor.red + ',' + thisColor.green + ',' + thisColor.blue + ');stroke-width:3;stroke:rgb(255,255,255)"/>';
		}
	}
}

function loadKey(key){
	document.getElementById(key).style.display = "block";
	if(key == "key-two"){
		document.getElementById("mask-two").style.display = "none";
	}
	if(key == "key-three"){
		document.getElementById("mask-three").style.display = "none";
	}
}

function randomColor(){
	var colors = ['red', 'green', 'blue', 'yellow'];
	return colors[Math.floor(Math.random() * colors.length)];
}

function randomShape(){
	var shapes = ['triangle', 'square', 'circle'];
	return shapes[Math.floor(Math.random() * shapes.length)];
}

function interpretColor(color){
	var rgb = {};
	if(color == 'red'){
		rgb.red = 255;	rgb.green = 0;		rgb.blue = 0;
	}
	else if(color == 'green'){
		rgb.red = 0;	rgb.green = 255;	rgb.blue = 0;
	}
	else if(color == 'blue'){
		rgb.red = 0;	rgb.green = 0;		rgb.blue = 255;
	}
	else{
		rgb.red = 255;	rgb.green = 255;	rgb.blue = 0;
	}
	return rgb;
}