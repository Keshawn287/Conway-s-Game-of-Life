<?php

session_start();


$con = mysqli_connect('localhost','root','');

mysqli_select_db($con, 'userregistration');

$name = $_POST['user'];
$pass = $_POST['password'];

$s = " select * from usertable where name = '$name'";
$result = mysqli_query($con, $s);
$num = mysqli_num_rows($result);

if($num == 1){
	echo"<a href='http://localhost/Conway-s-Game-of-Life/src/login.php'>Username is taken, Click here to try again.</a>";
}else{
	$reg = "insert into usertable(name , password) values ('$name' , '$pass')";
	mysqli_query($con, $reg);
	header('location:home.php');
}
?>