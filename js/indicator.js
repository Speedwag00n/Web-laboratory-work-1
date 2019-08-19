const maxOffset = 5;

if (document.getElementById("result-table") != null) {
	makeBlured();
	let intervalID = setInterval(changeIndicator, 50);
	setTimeout(function() {
		clearInterval(intervalID);
		setIndicator();
	}, 3000);
}

function makeBlured() {
	let indicator = document.getElementById("indicator-container");
	let items = indicator.getElementsByTagName("img");
	for (var i = 0; i < items.length; i++) {
		items[i].className += " blured";
	}
}

function changeIndicator() {
	let indicator = document.getElementById("indicator-container");

	let items = indicator.getElementsByTagName("img");
	for (var i = 0; i < items.length; i++) {
		if (i != 1) {
			let index = Math.floor(Math.random() * 9);
			items[i].setAttribute("src", "img/indicator/" + index + ".jpg")
		} else {
			continue;
		}
	}
	let offset = Math.random() * maxOffset;
	for (var i = 0; i < items.length; i++) {
		items[i].style.paddingTop = offset + "px";
	}
	offset = Math.random() * maxOffset;
	for (var i = 0; i < items.length; i++) {
		items[i].style.paddingLeft = offset + "px";
	}
	offset = Math.random() * maxOffset;
	for (var i = 0; i < items.length; i++) {
		items[i].style.paddingBottom = offset + "px";
	}
	offset = Math.random() * maxOffset;
	for (var i = 0; i < items.length; i++) {
		items[i].style.paddingRight = offset + "px";
	}
}

function setIndicator() {
	let indicator = document.getElementById("indicator-container");
	
	let x = document.getElementById("result-x").innerText;
	let y = document.getElementById("result-y").innerText;
	let r = document.getElementById("result-r").innerText;
	let hit = document.getElementById("result-hit").innerText;
	
	let items = indicator.getElementsByTagName("img");
	
	if(hit == "Да") {
		items[0].setAttribute("src", "img/indicator/1.jpg");
	} else {
		items[0].setAttribute("src", "img/indicator/0.jpg");
	}
	
	if (x < 0) {
		items[2].setAttribute("src", "img/indicator/1.jpg");
	} else {
		items[2].setAttribute("src", "img/indicator/0.jpg");
	}
	items[3].setAttribute("src", "img/indicator/" + Math.abs(Math.floor(Number.parseInt(x))) + ".jpg");
	
	if (y < 0) {
		items[4].setAttribute("src", "img/indicator/1.jpg");
	} else {
		items[4].setAttribute("src", "img/indicator/0.jpg");
	}
	items[5].setAttribute("src", "img/indicator/" + Math.abs(Math.floor(Number.parseInt(y))) + ".jpg");
	
	if (r < 0) {
		items[6].setAttribute("src", "img/indicator/1.jpg");
	} else {
		items[6].setAttribute("src", "img/indicator/0.jpg");
	}
	items[7].setAttribute("src", "img/indicator/" + Math.abs(Math.floor(Number.parseInt(r))) + ".jpg");
	
	for (var i = 0; i < items.length; i++) {
		items[i].style.paddingTop = "0px";
		items[i].style.paddingRight = "0px";
		items[i].style.paddingBottom = "0px";
		items[i].style.paddingLeft = "0px";
		items[i].className = items[i].className.replace("blured", "");
	}
}