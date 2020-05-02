<html>
<head>
		<title>Conway's Game of Life User Login ans Registration</title>
		<link rel="stylesheet" type="text/css" href="style.css">
		<link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
		
</head>
<body>

<div class="container"> <!--container is class of bootstrap-->
	<div class="login-position" >
	<div class="row">
	<div class="col-md-6 login-left">
		<h1>Login</h1>
		<form action="validation.php" method="post">
			<div class="form-group">
				<label>Enter Username</label>
				<input type="text" name="user" class="form-control" required>
			</div>
			<div class="form-group">
				<label>Enter Password</label>
				<input type="password" name="password" class="form-control" required>
			</div>
				<button type="submit" class="btn btn-primary"> Login </button>
		
		</form>
	</div>
	
		<div class="col-md-6 register-right">
		<h1>Register</h1>
		<form action="registration.php" method="post">
			<div class="form-group">
				<label>Choose Username</label>
				<input type="text" name="user" class="form-control" required>
			</div>
			<div class="form-group">
				<label>Choose Password</label>
				<input type="password" name="password" class="form-control" required>
			</div>
				<button type="submit" class="btn btn-primary"> Register </button>
		
		</form>
	</div>
</div>
</div>
	
</body>
</html>