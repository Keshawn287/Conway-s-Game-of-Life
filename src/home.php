<?php

session_start();
if(!isset($_SESSION['username'])){
	header('location:login.php');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Game of Life</title>
    <link rel="stylesheet" href='style1.css'>
</head>
<body>
<div style="text-align:center">
	<h1 class = "gol">Welcome to Game of Life User <?php echo $_SESSION['username']; ?></h1>
	
	<div id='grid'>
	</div>
	
    <div id='gencount'>
    </div>
	<div>
		<input type='button' value='Start' onclick='start()'.>
		<input type='button' value='Stop' onclick='stop()'.>
		<input type='button' value='Step' onclick='newGen()'.>
		<input type='button' value='Skip' onclick='skip()'.>
		<input type='button' value='Reset' onclick='reset()'.>
		
		<label for="patterns" style="color:white">Choose a pattern:</label>
		<select id="patterns" onchange="selectPattern(this)">
			<option value="blank"></option>
			<option value="block">Block</option>
			<option value="blinker">Blinker</option>
			<option value="toad">Toad</option>
			<option value="glider">Glider</option>
		</select>
		
	</div>
	
		<script src='script.js'></script>
	
	<a href="logout.php">LOG OUT </a>

</div>
</body>
</html>

