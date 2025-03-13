<?php

require_once("../connection/connection.php");
require_once('./m001_users.php');

$sql1 = "drop database gallery_system_db";
$result1 = $conn->query($sql1);

$sql2 = "create database gallery_system_db";
$result2 = $conn->query($sql2);

$conn->select_db("gallery_system_db");

create_users_migration($conn);


$conn->close();
