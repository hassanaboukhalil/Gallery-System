<?php
require_once(__DIR__ . '/../utils/headers.php');

$host = "localhost";
$user = "root";
$password = "";
$db_name = "gallery_system_db";

$conn = new mysqli($host, $user, $password, $db_name);

if ($conn->connect_error) {
    http_response_code(400);
    echo "connection error :(";
}
