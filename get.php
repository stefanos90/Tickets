<?php
include('db.php'); 
include('custom.php'); 
header('Content-Type: text/html; charset=utf-8');

$a_json_invalid = array(array("error" => "Only letters and digits are permitted."));
$json_invalid = json_encode($a_json_invalid);

$term = htmlspecialchars($_GET['term']);

// replace multiple spaces with one
$term = preg_replace('/\s+/', ' ', $term);


if (!isset($term) || is_null($term) || empty($term) || $term=="" || $term==" ") {
  print $json_invalid;
  exit();
}


$a_json = array();
$a_json_row = array();
 

 
// SECURITY HOLE ***************************************************************
// allow space, any unicode letter and digit, underscore and dash
if(preg_match("/[^\040\pL\pN_-]/u", $term)) {
  print $json_invalid;
  exit;
}
// *****************************************************************************
 
// database connection
// $conn = new mysqli("db_server", "db_user", "db_passwd", "db_name");
// to exw sto db.php
/* 
if($conn->connect_error) {
  echo 'Database connection failed...' . 'Error: ' . $conn->connect_errno . ' ' . $conn->connect_error;
  exit;
} else {
  $conn->set_charset('utf8');
}
*/ 
$parts = explode(' ', $term);
$p = count($parts);
 
/**
 * Create SQL
 */
/*
$sql = 'SELECT ev_title FROM event ';
for($i = 0; $i < $p; $i++) {
  $sql .= 'WHERE ev_title LIKE ' . "'%" . $conn->real_escape_string($parts[$i]) . "%'";
}
*/

$sql = "SELECT ev_title FROM event WHERE ev_title LIKE '%".$term."%'";
 
$rs = $conn->query($sql);
if($rs === false) {
  $user_error = 'Wrong SQL: ' . $sql . 'Error: ' . $conn->errno . ' ' . $conn->error;
  trigger_error($user_error, E_USER_ERROR);
}
 
while($row = $rs->fetch_assoc()) {
  $a_json_row["ev_title"] = $row['ev_title'];
  //$a_json_row["name"] = $row['name'];
  //$a_json_row["label"] = $row['post_title'];
  array_push($a_json, $a_json_row);
}

$json = json_encode($a_json,JSON_UNESCAPED_UNICODE);

if($json=="[]")
  echo '[{"ev_title":"No results"}]' ;
else
print $json;

?>

