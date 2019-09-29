const borders = [];
borders["X"] = ["-3", "5"];
borders["Y"] = ["-5", "3"];

function validate(form) {
	
	let X = form.X.value;
	let Y = form.Y.value;
	let R = form.R.value;

	let valid = true;
	
	if (!(isPresented(X, "X") && validateParam(X, "X"))) {
		valid = false;
	}
	if (!(isPresented(Y, "Y") && validateParam(Y, "Y"))) {
		valid = false;
	}
	if (!isPresented(R, "R")) {
		valid = false;
	}

	return valid;
	
}

function isPresented(param, paramName) {
	if (param == "" || param == null) {
		showWarning(paramName + " должен быть указан", paramName);
		return false;
	} else {
		showWarning("", paramName);
	}

	return true;
}

function validateParam(param, paramName) {
	if (!(!isNaN( Number(param) ) && param.lastIndexOf('.') != (param.length - 1))) {я
		showWarning(paramName + " должен быть числом", paramName);
		return false;
	} else {
		showWarning("", paramName);
	}
	let bottomBorder = borders[paramName][0];
	let topBorder = borders[paramName][1];

	if (!(Number(param) > bottomBorder && Number(param) < topBorder)) {
		showWarning(paramName + " не входит в необходимый диапазон (" + bottomBorder + " ... " + topBorder +")", paramName);
		return false;
	} else {
		showWarning("", paramName);
	}
	
	return true;
}

function showWarning(warningMessage, paramName) {
	
	let warningContainer = document.getElementById("warning-container-" + paramName);
	
	if (warningContainer != null) {
		warningContainer.textContent = warningMessage;
	}
	
}