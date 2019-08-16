let borders = [];
borders["X"] = ["-3", "5"];
borders["Y"] = ["-5", "3"];
borders["R"] = ["1", "5"]; 

function validate(form) {
	
	var X = form.X.value;
	var Y = form.Y.value;
	var R = form.R.value;

	if (!validateParam(X, "X")) {
		return false;
	}
	if (!validateParam(Y, "Y")) {
		return false;
	}
	if (!validateParam(R, "R")) {
		return false;
	}
	return true;
	
}

function validateParam(param, paramName) {

	if (param == "") {
		alert("Параметр " + paramName + " должен быть указан");
		return false;
	}
	if (!Number.isInteger( parseInt(param, 10) )) {
		alert(paramName + " должен быть целым числом");
		return false;
	}
	var bottomBorder = borders[paramName][0];
	var topBorder = borders[paramName][1];

	if (!(parseInt(param, 10) >= bottomBorder && parseInt(param, 10) <= topBorder)) {
		alert("Значение " + paramName + " не входит в необходимый диапазон (" + bottomBorder + " ... " + topBorder +")");
		return false;
	} else {
		console.log("Temp");
	}
	
	return true;
}