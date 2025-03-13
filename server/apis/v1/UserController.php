<?php

require_once(__DIR__ . '/../../models/User.php');
require_once(__DIR__ . '/../../utils/functions.php');


class UserController
{
    static function addUser()
    {
        if (!issets_post_data("first_name", "last_name", "email", "pass")) {

            http_response_code(400);

            echo json_encode([
                "message" => "first name, last name, email and password are required"
            ]);

            exit();
        }

        $first_name = $_POST['first_name'];
        $last_name = $_POST['last_name'];
        $email = $_POST["email"];
        $pass = $_POST["pass"];



        User::create($first_name, $last_name, $email, $pass);
        User::save();
        echo json_encode([
            "response" => 1,
            "message" => 'User Created Successfully',
            "isSuccess" => true
        ]);
    }
}
