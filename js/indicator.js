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
			let index = Math.floor(Math.random() * 10);
			items[i].setAttribute("src", "img/indicator/" + index + ".jpg")
		} else {
			continue;
		}
	}
	
	setRandomPaddings(items, maxOffset);
}

function setRandomPaddings(items, maxOffset) {
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
	
	setIndicatorPart(x, 1, items);
	setIndicatorPart(y, 2, items);
	setIndicatorPart(r, 3, items);
	
	for (var i = 0; i < items.length; i++) {
		items[i].style.paddingTop = "0px";
		items[i].style.paddingRight = "0px";
		items[i].style.paddingBottom = "0px";
		items[i].style.paddingLeft = "0px";
		items[i].className = items[i].className.replace("blured", "");
	}
}

function setIndicatorPart(value, partNumber, indicatorItems) {
	if (value < 0) {
		indicatorItems[partNumber * 2].setAttribute("src", "img/indicator/1.jpg");
	} else {
		indicatorItems[partNumber * 2].setAttribute("src", "img/indicator/0.jpg");
	}
	indicatorItems[partNumber * 2 + 1].setAttribute("src", "img/indicator/" + Math.abs(Math.round( Number(value) )) + ".jpg");
}