<html>
<body>

<?php
$myHost = "mysql12.000webhost.com";
$myUserName = "a1773855_testun";
$myPassword = "book2500"; //how do I protect this better? 
$mydb = "a1773855_testdb";
$con=mysqli_connect($myHost,$myUserName,$myPassword,$mydb);

// Check connection
if (mysqli_connect_errno($con))
  {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  }
else
  {
  //echo "Sucess";
  }

//Check to see if values are already present in database
$tableName = "UserData";
$query = "SELECT email FROM " . $tableName ." WHERE email = '$_POST[email]' LIMIT 1";
$result = mysqli_query($con,$query); 
if (mysqli_num_rows($result) > 0) {
echo 'You are already on this database';
} 
else{
// Insert the new values into the database
$newQuery = "INSERT INTO ". $tableName . " (firstName, surname, email, age) VALUES ('$_POST[firstName]','$_POST[surname]','$_POST[email]','$_POST[age]')";
if (!mysqli_query($con,$newQuery))
  {
  die('Error: ' . mysqli_error($con));
  }
echo "This entry has been recorded ";
}

mysqli_close($con);
?> 

</body>
</html>
