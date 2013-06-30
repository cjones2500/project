<html>
<body>

<?php
$myHost = "mysql12.000webhost.com"
$myUserName = "a1773855_testun"
$myPassword = "book2500" //how do I protect this better? 
$mydb = "a1773855_testdb"
$con=mysqli_connect($myHost,$myUserName,$myPassword,$mydb);

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

</body>
</html>
