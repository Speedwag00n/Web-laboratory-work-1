let borders = [];
borders["X"] = ["-3", "5"];
borders["Y"] = ["-5", "3"];

function validate(form) {
	
	var X = form.X.value;
	var Y = form.Y.value;
	var R = form.R.value;

	if (!(isPresented(X, "X") && validateParam(X, "X"))) {
		return false;
	}
	if (!(isPresented(Y, "Y") && validateParam(Y, "Y"))) {
		return false;
	}
	if (!isPresented(R, "R")) {
		return false;
	}
	return true;
	
}

function isPresented(param, paramName) {
	if (param == "") {
		showWarning("Параметр " + paramName + " должен быть указан");
		return false;
	}

	return true;
}

function validateParam(param, paramName) {
	if (!(!isNaN(Number(param)) && Number.isInteger( parseInt(param, 10) ))) {
		showWarning(paramName + " должен быть числом");
		return false;
	}
	var bottomBorder = borders[paramName][0];
	var topBorder = borders[paramName][1];

	if (!(parseInt(param, 10) > bottomBorder && parseInt(param, 10) < topBorder)) {
		showWarning("Значение " + paramName + " не входит в необходимый диапазон (" + bottomBorder + " ... " + topBorder +")");
		return false;
	}
	
	return true;
}

function showWarning(warningMessage) {
	
	var warningContainer = document.getElementById("warning-container");
	
	if (warningContainer != null) {
		warningContainer.textContent = warningMessage;
	}
	
}