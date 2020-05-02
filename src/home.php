<?php

session_start();
if(!isset($_SESSION['username'])){
	header('location:login.php');
}

?>

<html>
<head>
	<title>Home Page</title>
</head>
<body>

	<h1>Welcome User <?php echo $_SESSION['username']; ?></h1>
	
	<a href="logout.php">LOG OUT </a>
</body>
</html>

