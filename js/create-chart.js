const arrowLength = 7;
const lineWidth = 2;
const pointScale = 3;
const signSpace = 9;
const pointRadius = 1.5;

const backgroundColor = "white";
const axisesColor = "black";
const regionColor = "#3399FF";
const signsColor = axisesColor;
const pointColor = "red";

const signsFont = "14px monospace";

{
	let canvas = document.getElementById("task-chart");
	canvas.width = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;

	drawBackground(canvas);
	drawArea(canvas);
	drawAxises(canvas);
	drawAxisesSigns(canvas);
	if (document.getElementById("result-table") != null) {
		let r = document.getElementById("result-r").innerText;
		let x = canvas.width / 2 + document.getElementById("result-x").innerText * canvas.width * 0.4 / r;
		let y = canvas.height / 2 + -document.getElementById("result-y").innerText * canvas.height * 0.4 / r;
		drawPointsSigns(canvas, r);
		drawPoint(canvas, x, y);
	} else {
		drawPointsSigns(canvas, "R");
	}
}

function drawBackground(canvas) {
	let context = canvas.getContext("2d");
	context.fillStyle = backgroundColor;
	
	context.fillRect(0, 0, canvas.width, canvas.height);
}

function drawArea(canvas) {
	let context = canvas.getContext("2d");
	context.strokeStyle = regionColor;
	context.fillStyle = regionColor;
	
	context.beginPath();

	context.moveTo(canvas.width / 2, canvas.height / 2);

	context.lineTo(canvas.width / 2, canvas.height * 0.3);
	context.lineTo(canvas.width * 0.9, canvas.height / 2);
	context.lineTo(canvas.width / 2, canvas.height / 2);

	context.lineTo(canvas.width / 2, canvas.height * 0.9);
	context.lineTo(canvas.width * 0.3, canvas.height * 0.9);
	context.lineTo(canvas.width * 0.3, canvas.height / 2);
	context.lineTo(canvas.width / 2, canvas.height / 2);

	context.lineTo(canvas.width * 0.3, canvas.height / 2);
	context.arc(canvas.width / 2, canvas.height / 2, canvas.width * 0.2, 1 * Math.PI, 3/2 * Math.PI);
	context.lineTo(canvas.width / 2, canvas.height / 2);

	context.closePath();
	context.fill();
	context.stroke();
}

function drawAxises(canvas) {
	let context = canvas.getContext("2d");
	
	context.beginPath();
	context.strokeStyle = axisesColor;
	context.lineWidth = lineWidth;
	
	context.moveTo(canvas.width / 2, canvas.height);
	context.lineTo(canvas.width / 2, 0);

	context.lineTo(canvas.width / 2 - arrowLength / 2, arrowLength);
	context.moveTo(canvas.width / 2, 0);
	context.lineTo(canvas.width / 2 + arrowLength / 2, arrowLength);

	context.moveTo(0, canvas.height / 2);
	context.lineTo(canvas.width, canvas.height / 2);

	context.lineTo(canvas.width - arrowLength, canvas.height / 2 + arrowLength / 2);
	context.moveTo(canvas.width, canvas.height / 2);
	context.lineTo(canvas.width - arrowLength, canvas.height / 2 - arrowLength / 2);


	context.moveTo(canvas.width * 0.1, canvas.height / 2 - pointScale);
	context.lineTo(canvas.width * 0.1, canvas.height / 2 + pointScale);

	context.moveTo(canvas.width * 0.3, canvas.height / 2 - pointScale);
	context.lineTo(canvas.width * 0.3, canvas.height / 2 + pointScale);

	context.moveTo(canvas.width * 0.7, canvas.height / 2 - pointScale);
	context.lineTo(canvas.width * 0.7, canvas.height / 2 + pointScale);

	context.moveTo(canvas.width * 0.9, canvas.height / 2 - pointScale);
	context.lineTo(canvas.width * 0.9, canvas.height / 2 + pointScale);

	context.moveTo(canvas.width / 2 - pointScale, canvas.height * 0.1);
	context.lineTo(canvas.width / 2 + pointScale, canvas.height * 0.1);

	context.moveTo(canvas.width / 2 - pointScale, canvas.height * 0.3);
	context.lineTo(canvas.width / 2 + pointScale, canvas.height * 0.3);

	context.moveTo(canvas.width / 2 - pointScale, canvas.height * 0.7);
	context.lineTo(canvas.width / 2 + pointScale, canvas.height * 0.7);

	context.moveTo(canvas.width / 2 - pointScale, canvas.height * 0.9);
	context.lineTo(canvas.width / 2 + pointScale, canvas.height * 0.9);

	context.stroke();
}

function drawAxisesSigns(canvas) {
	let context = canvas.getContext("2d");
    context.font = signsFont;
    context.fillStyle = signsColor;
	
	context.fillText("X", canvas.width / 2 + signSpace / 2, signSpace);
	context.fillText("Y", canvas.width - signSpace, canvas.height / 2 - signSpace / 2);
}

function drawPointsSigns(canvas, r) {
	let context = canvas.getContext("2d");
	context.font = signsFont;
    context.fillStyle = signsColor;
	
	let rIsNumber = !isNaN(Number(r));
	
	let sign;
	rIsNumber ? sign = -r + "" : sign = "-" + r;
	context.fillText(sign, canvas.width * 0.1 - 0.5 * sign.length * signSpace, canvas.height / 2 - signSpace / 2);
	context.fillText(sign, canvas.width / 2 + signSpace / 2, canvas.height * 0.9 + signSpace / 2);
	rIsNumber ?sign = -r / 2 + "" : sign = "-" + r + "/2";
	context.fillText(sign, canvas.width * 0.3 - 0.5 * sign.length * signSpace, canvas.height / 2 - signSpace / 2);
	context.fillText(sign, canvas.width / 2 + signSpace / 2, canvas.height * 0.7 + signSpace / 2);
	rIsNumber ? sign = r / 2 + "" : sign = r + "/2";
	context.fillText(sign, canvas.width * 0.7 - 0.5 * sign.length * signSpace, canvas.height / 2 - signSpace / 2);
	context.fillText(sign, canvas.width / 2 + signSpace / 2, canvas.height * 0.3 + signSpace / 2);
	sign = r + "";
	context.fillText(sign, canvas.width * 0.9 - 0.5 * sign.length * signSpace, canvas.height / 2 - signSpace / 2);
	context.fillText(sign, canvas.width / 2 + signSpace / 2, canvas.height * 0.1 + signSpace / 2);
}

function drawPoint(canvas, x, y) {
	let context = canvas.getContext("2d");
	context.beginPath();
	context.strokeStyle = pointColor;
	context.fillStyle = pointColor;
	
	context.arc(x, y, pointRadius, 0, 2 * Math.PI);
	context.closePath();
	context.fill();
	context.stroke();
}