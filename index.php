<!doctype html>
<html>

<head>
	<meta charset="utf-8"/>
	<title>Web-программирование, лабораторная #1</title>
	<link rel="shortcut icon" href="img/favicon.ico">
	<script src="js/validation.js"></script>
	
	<style>	
		body{
			background-image: url(img/background.jpg);
			background-size: 100% 100%;
			margin: 0;
			background-attachment: fixed;
		}
		
		#header{			
			min-height: 50px;
			display: grid;
			grid-template-columns: 1fr 1fr 1fr;
			font-family: monospace !important;
			color: white !important;
			font-size: 18px;
		}
		
		#workspace-container{			
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		
		.workspace-item-container{
			margin: 0px 20px 10px 20px;
		}
		
		body > div{
			width: 65%;
			max-width: 1200px;
			min-width: 900px;
			
			margin-left: auto;
			margin-right: auto;
			margin-top: 20px;
			
			background: linear-gradient(45deg, #777777, #5B5B5B, #777777);
			border: 2px solid black;
		
			-moz-border-radius: 10px;
			-webkit-border-radius: 10px;
			-khtml-border-radius: 10px;
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
		
		.parameter-container{
			margin-bottom: 20px;
			border: 2px solid black;
			padding: 8px;
			
			-moz-border-radius: 5px;
			-webkit-border-radius: 5px;
			-khtml-border-radius: 5px;
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
		}
	
		.left-element{
			padding-left: 20px;
			text-align: left;
		}
		
		.center-element{
			text-align: center;
		}
		
		.rigth-element{
			padding-right: 20px;
			text-align: right;
		}
	
		div h1{
			text-align: center;
			margin: 10px 0px 10px 0px;
			font-size: 30px;
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
		
		#task-image{
			background: url(img/areas.png) no-repeat;
			background-size: 100% 100%;
			width: 200px;
			height: 200px;
		}
		
		input[type="text"]:focus{
			background-color: #A0A0A0;
			transition: 0.2s;
		}
	</style>
</head>

<body>
	<div id="header">
		<span id="author-name" class="left-element">Неманков Илья Олегович</span>
		<span id="author-group" class="center-element">P3211</span>
		<span id="lab-variant" class="rigth-element">Вариант 211015</span>
	</div>
	<div id="workspace-container">
		<div class="workspace-item-container">
			<h1>Область</h1>
			<div class="horisontal-centering-container">
				<img id="task-image">
			</div>
		</div>
		<div class="workspace-item-container">
			<h1>Параметры</h1>
			<form id="computation-form" onsubmit="return validate(this);">
				<div>
					<div class="horisontal-centering-container parameter-container">
						<div class="row-conteiner">
							<label class="parameter-label">X: </label>
							<input type="text" name="X" placeholder="(-3 ... 5)"/>
						</div>
						<div class="row-conteiner">
							<label class="parameter-label">Y: </label>
							<input type="text" name="Y" placeholder="(-5 ... 3)"/>
						</div>
					</div>
					<div class="horisontal-centering-container parameter-container">
						<div class="parameter-header">
							<label class="parameter-label">Значения R</label>
						</div>
						<div>
							<div class="row-conteiner">
								<label class="radio-button-label">1</label>
								<input type="radio" name="R" value="1"/>
							</div>
							<div class="row-conteiner">
								<label class="radio-button-label">2</label>
								<input type="radio" name="R" value="2"/>
							</div>
							<div class="row-conteiner">
								<label class="radio-button-label">3</label>
								<input type="radio" name="R" value="3"/>
							</div>
							<div class="row-conteiner">
								<label class="radio-button-label">4</label>
								<input type="radio" name="R" value="4"/>
							</div>
							<div class="row-conteiner">
								<label class="radio-button-label">5</label>
								<input type="radio" name="R" value="5"/>
							</div>
						</div>
					</div>
					<div class="horisontal-centering-container">
						<button class="submit-button" type="submit">Отправить</button>
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
</body>

</html>