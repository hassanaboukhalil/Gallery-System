<?php
require_once(__DIR__ . '/../connection/connection.php');
require_once(__DIR__ . '/UserSkeleton.php');

class User extends UserSkeleton
{
    public static function save()
    {
        global $conn;

        $query = $conn->prepare("INSERT INTO users(first_name, last_name, email, pass) VALUES (?,?,?,?)");
        $query->bind_param("ssss", self::$first_name, self::$last_name, self::$email, self::$pass);
        $query->execute();

        return true;
    }
};
