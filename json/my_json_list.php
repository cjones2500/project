<?php
header("Content-Type: application/json");
$jsonData = file_get_contents("mylist.json");
echo $jsonData;
?>
