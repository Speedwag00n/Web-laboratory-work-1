<?php

	$workTime = microtime(true);
	
	if (!valuesPresented()) {
		include 'templates/empty-result.html';
		return;
	}
	
    $X = $_GET["X"];
    $Y = $_GET["Y"];
    $R = $_GET["R"];
	
	if (!(checkX($X) && checkY($Y) && checkR($R))) {
		include_once 'templates/empty-result.html';
		return;
	}

	$hit;
	
	if (( ($X <= 0) && ($Y >= 0) && (pow( $X, 2 ) + pow( $Y, 2 ) <= pow( 0.5*$R, 2  ) )) || 
		( ($X <= 0) && ($Y <= 0) && (abs( $X ) <= 0.5*$R) && (abs( $Y ) <= $R) ) ||
		( ($X >= 0) && ($Y >= 0) && ($Y <= -0.5*$X + 0.5*$R) )) {
		$hit = "Да";
	} else {
		$hit = "Нет";
	}
		
	$workTime = round(microtime(true) - $workTime, 6);
	$workTime = sprintf('%f', $workTime);
	
	include_once "templates/result-table.html";
	
	function valuesPresented() {
		return (isset($_GET["X"]) && isset($_GET["Y"]) && isset($_GET["R"]));
	}
	
	function checkX($X) {
		return (is_numeric($X) && $X > -3 && $X < 5);
	}
	
	function checkY($Y) {
		return (is_numeric($Y) && $Y > -5 && $Y < 3);
	}
	
	function checkR($R) {
		return (($R == ((string)(int)$R)) && $R >= 1 && $R <= 5);
	}

?>