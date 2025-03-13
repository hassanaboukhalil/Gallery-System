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
        $user = User::save();
        echo json_encode([
            "message" => 'User Created Successfully',
            "isSuccess" => true,
            "user" => $user
        ]);
    }

    static function login()
    {
        if (!issets_post_data("email", "pass")) {
            http_response_code(400);
            echo json_encode([
                "message" => "email and password are required"
            ]);

            exit();
        }

        $email = $_POST["email"];
        $pass = $_POST["pass"];

        try {
            User::create(null, null, $email, null);
            $user = User::getUser();

            if ($user && (hash('sha256', $pass) == $user['pass'])) {
                unset($user["pass"]);
            } else {
                $user = null;
            }

            echo json_encode([
                "message" => $user ? 'Login Successfull' : 'Wrong email or password',
                "isSuccess" => $user ? true : false,
                'user' => $user
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(["message" => $e->getMessage()]);
        }
    }
}
