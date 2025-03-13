<?php

include_once("../models/User.php");
include_once("../models/Image.php");
require_once("../connection/connection.php");


$users = [
    [
        "first_name" => "yousef",
        "last_name" => "jawad",
        "email" => "yousef@gmail.com",
        "pass" => hash("sha256", "qwer1234")
    ],
    [
        "first_name" => "mhmd",
        "last_name" => "yehya",
        "email" => "mhmd@gmail.com",
        "pass" => hash("sha256", "qwer1234")
    ]
];


foreach ($users as $user) {
    User::create($user["first_name"], $user["last_name"], $user["email"], $user["pass"]);
    User::save();
}
