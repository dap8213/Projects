<?php

define('DB_NAME','forms1');
define('DB_USER','root');
define('DB_PASSWORD','');
define('DB_HOST','localhost');

$link = mysqli_connect(DB_HOST, DB_USER, DB_PASSWORD);

if (!$link){
  die('Could not connect: ' .mysql_error());
}

$db_selected = mysqli_select_db($link,DB_NAME);

if(!$db_selected){
  die('Can\'t use' . DB_NAME . ':'. mysql_error());
}
echo 'Connected successfully';

$value1 = $_POST['first_name'];
$value2 = $_POST['last_name'];
$value3 = $_POST['phone_number'];
$value4 = $_POST['street_address'];
$value5 = $_POST['state'];
$value6 = $_POST['zip_code'];
$value7 = $_POST['password'];

$sql = "INSERT INTO User_Information(first_name, last_name, phone_number, street_address,
state, zip_code, password) VALUES ('$value1','$value2','$value3','$value4','$value5','$value6','$value7')";

if (!mysqli_query($link,$sql)){
  die('Error: ' . mysqli_error($link));
}

mysqli_close($link);

?>
