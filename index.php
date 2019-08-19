<!doctype html>
<html>

<head>
	<meta charset="utf-8"/>
	<title>Web-программирование, лабораторная работа #1</title>
	<link rel="shortcut icon" href="img/favicon.ico">
	
	<style>	
		body{
			background: #242529;
			background: -webkit-radial-gradient(top, #777E84, #242529);
			background: -moz-radial-gradient(top, #777E84, #242529);
			background: -ms-radial-gradient(top, #777E84, #242529);
			background: -o-radial-gradient(top, #777E84, #242529);
			background: radial-gradient(to bottom, #777E84, #242529);
			margin: 0;
			background-attachment: fixed;
		}
		
		#header{
			height: 50px;
			font-family: monospace !important;
			color: white !important;
			font-size: 18px;
			text-align: center;
		}
		
		.header-content-container {
			display:  table-cell;
			vertical-align:  middle;
		}
		
		.header-content{
			width: 250px;
			line-height: 50px;
		}
		
		#workspace-container{		
			font-size: 0px;
			vertical-align: top;
		}
		
		.workspace-item-container{
			display: inline-block;
			width: calc(50% - 40px);
			margin: 0px 20px 10px 20px;
			vertical-align: top;
		}
		
		body > div{
			width: 65%;
			max-width: 1200px;
			min-width: 950px;
			
			margin-left: auto;
			margin-right: auto;
			margin-top: 20px;
			
			background: #777777;
			background: -webkit-linear-gradient(45deg, #777777, #5B5B5B, #777777);
			background: -moz-linear-gradient(45deg, #777777, #5B5B5B, #777777);
			background: -ms-linear-gradient(45deg, #777777, #5B5B5B, #777777);
			background: -o-linear-gradient(45deg, #777777, #5B5B5B, #777777);
			background: linear-gradient(45deg, #777777, #5B5B5B, #777777);
			
			border: 2px solid black;
		
			-webkit-border-radius: 10px;
			-moz-border-radius: 10px;
			-ms-border-radius: 10px;
			-o-border-radius: 10px;
			border-radius: 10px;
		}
		
		.horisontal-centering-container{
			text-align: center;
		}
		
		.parameter-header{
			margin-bottom: 10px;
		}
		
		.row-conteiner{
			display: inline-block;
			margin: 0px 8px 0px 8px;
		}
		
		.parameter-container, .button-container{
			margin-bottom: 20px;
			padding: 8px;
			
			-webkit-border-radius: 5px;
			-moz-border-radius: 5px;
			-ms-border-radius: 5px;
			-o-border-radius: 5px;
			border-radius: 5px;
		}
		
		.parameter-container{
			border: 2px solid black;
		}
		
		.submit-button{
			font-family: monospace;
			color: white;
			font-size: 18px;
			background-color: #4C4C4C;
			border: 2px solid white;
		}
		
		.submit-button:hover{
			background-color: #0F0F0F;
			color: #A0A0A0
			border: 2px solid #A0A0A0;
			transition: 0.3s;
		}
		
		div span{
			margin-top: auto;
			margin-bottom: auto;
			font-family: monospace;
			color: white;
		}
	
		.left-element{
			padding-left: 20px;
			text-align: left;
			float: left;
		}
		
		.center-element{
			text-align: center;
		}
		
		.rigth-element{
			padding-right: 20px;
			text-align: right;
			float: right;
		}
	
		div h1{
			text-align: center;
			margin: 10px 0px 10px 0px;
			font-size: 30px;
		}
		
		input {
			margin: 0px 3% 0px 1%;
		}
		
		.parameter-label{
			font-size: 22px;
			font-weight: bold;
		}
		
		.radio-button-label{
			font-size: 18px;
		}
		
		h1, label{
			font-family: monospace;
			color: white;
		}
		
		#task-chart{
			width: 250px;
			height: 250px;
		}
		
		input[type="text"]:focus{
			background-color: #A0A0A0;
			transition: 0.2s;
		}
		
		#warning-container{
			display: block;
			font-size: 16px;
		}
		
		.active-text{
			transition: 0.5s linear;
			color: #CE0812;
		}
		
		#indicator-container {
			height: 200px;
			font-size: 0px;
		}
		
		.indicator-image{
			background-size: 100% 100%;
			width: 90px;
			height: 180px;
			
			margin: 10px 5px 0px 5px;
			vertical-align: bottom;
			
			-webkit-border-radius: 15px;
			-moz-border-radius: 15px;
			-ms-border-radius: 15px;
			-o-border-radius: 15px;
			border-radius: 15px;
		}
		
		.blured{
			-webkit-filter: blur(3px);
			-moz-filter: blur(3px);
			-ms-filter: blur(3px);
			-o-filter: blur(3px);
			filter: blur(3px);
		}
	</style>
</head>

<body>
	<div id="header">
		<span id="author-name" class="left-element header-content">Неманков Илья Олегович</span>
		<span id="author-group" class="center-element header-content">P3211</span>
		<span id="lab-variant" class="rigth-element header-content">Вариант 211015</span>
	</div>
	<div id="workspace-container">
		<div class="workspace-item-container">
			<h1>Область</h1>
			<div class="horisontal-centering-container">
				<canvas id="task-chart"/>
			</div>
		</div>
		<div class="workspace-item-container">
			<h1>Параметры</h1>
			<form id="computation-form" onsubmit="return validate(this);">
				<div>
					<div class="horisontal-centering-container parameter-container">
						<label class="parameter-label">X:</label>
						<input type="text" name="X" placeholder="(-3 ... 5)"/>

						<label class="parameter-label">Y:</label>
						<input type="text" name="Y" placeholder="(-5 ... 3)"/>
					</div>
					<div class="horisontal-centering-container parameter-container">
						<div class="parameter-header">
							<label class="parameter-label">Значения R</label>
						</div>
						<div>
							<label class="radio-button-label">1</label>
							<input type="radio" name="R" value="1"/>
							
							<label class="radio-button-label">2</label>
							<input type="radio" name="R" value="2"/>
							
							<label class="radio-button-label">3</label>
							<input type="radio" name="R" value="3"/>
							
							<label class="radio-button-label">4</label>
							<input type="radio" name="R" value="4"/>
							
							<label class="radio-button-label">5</label>
							<input type="radio" name="R" value="5"/>
						</div>
					</div>
					<div class="horisontal-centering-container button-container">
						<button class="submit-button" type="submit">Отправить</button>
					</div>
					<div class="horisontal-centering-container">
						<span id="warning-container" class="center-element"/>
					</div>
				</div>
			</form>
		</div>
	</div>
	<div id="result-container" class="horisontal-centering-container">
		<h1>Результат</h1>
        <?php
			include 'check.php';
		?>
	</div>
	<div id="indicator-container" class="horisontal-centering-container">
		<img class="indicator-image" src="img/indicator/0.jpg"/>
		<img class="indicator-image" src="img/indicator/point.jpg"/>
		<img class="indicator-image" src="img/indicator/0.jpg"/>
		<img class="indicator-image" src="img/indicator/0.jpg"/>
		<img class="indicator-image" src="img/indicator/0.jpg"/>
		<img class="indicator-image" src="img/indicator/0.jpg"/>
		<img class="indicator-image" src="img/indicator/0.jpg"/>
		<img class="indicator-image" src="img/indicator/0.jpg"/>
	</div>
	
	<script src="js/validation.js"></script>
	<script src="js/create-chart.js"></script>
	<script src="js/indicator.js"></script>
</body>

</html>