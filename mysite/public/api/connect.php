<?php
$dbHost = 'localhost';
$dbUser = 'morelink_deco';
$dbPass = '96521Aa@!@!@!';
$dbName = 'morelink_deco';

$mysqli = new mysqli($dbHost, $dbUser, $dbPass, $dbName);
if ($mysqli->connect_errno) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Database connection failed']);
    exit;
}
?>