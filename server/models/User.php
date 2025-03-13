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

        if ($query->affected_rows > 0) {
            $user = [
                "id" => $conn->insert_id,
                "first_name" => self::$first_name,
                "email" => self::$email
            ];
            return $user;
        } else {
            throw new Exception("Failed to create user.");
        }
    }
    public static function getUser()
    {
        global $conn;

        $query = $conn->prepare("SELECT * FROM users WHERE email = ?");
        $query->bind_param("s", self::$email);
        $query->execute();

        $result = $query->get_result();
        $user = $result->fetch_assoc();
        return $user;
    }
};
