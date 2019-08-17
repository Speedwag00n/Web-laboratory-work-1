<?php

	$workTime = microtime(true);

	if (!(isset($_GET["X"]) && isset($_GET["Y"]) && isset($_GET["R"]))) {
		include 'templates/empty-result.html';
		return;
	}

    $X = $_GET["X"];
    $Y = $_GET["Y"];
    $R = $_GET["R"];
	$hit;
    $currentTime = date("d-m-Y H:i:s");
	
	$resultTemplate = file_get_contents("templates/result-table.html");

	$isValid = true;
	
	if (!(is_numeric($X) && $X >= -3 && $X <= 5)){
		$X = $X . "(Not valid)";
		$isValid = false;
	}
	
	if (!(is_numeric($Y) && $Y >= -5 && $Y <= 3)){
		$Y = $Y . "(Not valid)";
		$isValid = false;
	}
	
	if (!(is_numeric($R) && $R >= 1 && $R <= 5)){
		$R = $R . "(Not valid)";
		$isValid = false;
	}
	
	if (!$isValid) {
		$hit = '?';
	} else if (( ($X <= 0) && ($Y >= 0) && (pow( $X, 2 ) + pow( $Y, 2 ) <= pow( 0.5*$R, 2  ) )) || 
		( ($X <= 0) && ($Y <= 0) && (abs( $X ) <= 0.5*$R) && (abs( $Y ) <= $R) ) ||
		( ($X >= 0) && ($Y >= 0) && ($Y <= -0.5*$X + 0.5*$R) )) {
		$hit = "Да";
	} else {
		$hit = "Нет";
	}
	
	$resultTemplate = str_replace('<?=$X?>', $X, $resultTemplate);
	$resultTemplate = str_replace('<?=$Y?>', $Y, $resultTemplate);
	$resultTemplate = str_replace('<?=$R?>', $R, $resultTemplate);
	$resultTemplate = str_replace('<?=$hit?>', $hit, $resultTemplate);
	$resultTemplate = str_replace('<?=$currentTime?>', $currentTime, $resultTemplate);
		
	$workTime = round(microtime(true) - $workTime, 8);
	
	$resultTemplate = str_replace('<?=$workTime?>', $workTime, $resultTemplate);
	
	echo $resultTemplate;

?>