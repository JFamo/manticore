function generateKeys(){
	var ids = ["key-one-one","key-one-two","key-two-one","key-two-two","key-two-three","key-three-one","key-three-two","key-three-three","key-three-four","key-three-five"];
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

function attack(){
	//Choose action, declare vars for HTML elements
	var actionpotentials = ['zombie','zombie','zombie','zombie','zombie','zombie','zombie','zombie','firewall','firewall','firewall','firewall','firewall','firewall','firewall','trojan','trojan','trojan','trojan','firewall','firewall','bot','bot','bot','bot','bot'];
	var thisaction = actionpotentials[Math.floor(Math.random() * actionpotentials.length)];
	var actiontitle = document.getElementById('action-title');
	var actionimage = document.getElementById('action-image');
	var actiondescription = document.getElementById('action-description');
	var actioninitial = document.getElementById('action-initial');

	//Deactivate initial text
	if(actioninitial.style.display != "none"){
		actioninitial.style.display = "none";
	}

	//Activate loader
	document.getElementById('loader').style.display = "block";
	actiontitle.style.display = "none";
	actionimage.style.display = "none";
	actiondescription.style.display = "none";

	//Update action display content
	if(thisaction == 'zombie'){
		actiontitle.innerHTML = "Zombie Computer";
		actionimage.src = "images/render_computer.png";
		actiondescription.innerHTML = "Place a zombie computer on any unoccupied data node connected to one you currently occupy."
	}
	else if(thisaction == 'firewall'){
		actiontitle.innerHTML = "Firewall";
		actionimage.src = "images/render_firewall.png";
		actiondescription.innerHTML = "Place a firewall on any connection on the board."
	}
	else if(thisaction == 'trojan'){
		actiontitle.innerHTML = "Trojan";
		actionimage.src = "images/render_trojan.png";
		actiondescription.innerHTML = "Place a trojan on any unoccupied node connected to one you currently occupy."
	}
	else if(thisaction == 'bot'){
		actiontitle.innerHTML = "Bot";
		actionimage.src = "images/render_bot.png";
		actiondescription.innerHTML = "Place a bot on any unoccupied node connected to one you currently occupy."
	}
	else if(thisaction == 'data'){
		thisShape = randomShape();
		thisColor = randomColor();
		actiontitle.innerHTML = "Data Value";
		actionimage.src = "images/render_trojan.png";
		actiondescription.innerHTML = "Collect one " + thisColor + " " + thisShape + " data card.";
	}
	else if(thisaction == 'data'){
		thisShape = randomShape();
		thisColor = randomColor();
		actiontitle.innerHTML = "Data Value";
		actionimage.src = "images/render_trojan.png";
		actiondescription.innerHTML = "Collect one " + thisColor + " " + thisShape + " data card.";
	}
	else{
		actiontitle.innerHTML = "Error";
		actionimage.src = "images/render_bot.png";
		actiondescription.innerHTML = "You encountered an error! Do nothing.";
	}
	setTimeout(showAction, 1000)
}

function showAction(){
	document.getElementById('loader').style.display = "none";
	var actiontitle = document.getElementById('action-title');
	var actionimage = document.getElementById('action-image');
	var actiondescription = document.getElementById('action-description');
	actiontitle.style.display = "block";
	actionimage.style.display = "block";
	actiondescription.style.display = "block";
}