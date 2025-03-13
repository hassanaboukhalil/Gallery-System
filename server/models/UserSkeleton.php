<?php
class UserSkeleton
{

    public static $first_name;
    public static $last_name;
    public static $email;
    public static $pass;


    public static function create($first_name, $last_name, $email, $pass)
    {
        self::$first_name = $first_name;
        self::$last_name = $last_name;
        self::$email = $email;
        self::$pass = $pass;
    }
};
