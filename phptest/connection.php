<html>
<body>

<?php
$con=mysqli_connect("mysql12.000webhost.com","a1773855_testun","book2500","a1773855_testdb");

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
else
  {
  echo "Sucess";
  }

mysqli_close($con);
?> 

<html>
<body>