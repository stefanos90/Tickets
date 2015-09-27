<?php
$DBServer = 'localhost'; 
$DBUser   = 'tickets';
$DBPass   = '*******';
$DBName   = 'tickets';  
$conn = new mysqli($DBServer, $DBUser, $DBPass, $DBName);

if($conn->connect_error) {
  echo 'Database connection failed...' . 'Error: ' . $conn->connect_errno . ' ' . $conn->connect_error;
  exit;
} else {
  $conn->set_charset('utf8');

}

?>