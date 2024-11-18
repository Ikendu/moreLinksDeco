<?php
$host = "localhost";
$username = "root";
$password = "";
$database = "thankgod";

$conn = new mysqli($host, $username, $password, $database);
if ($conn->connect_error) {
    die("Conneccction Failed" . $conn->connect_error);
}
?>

