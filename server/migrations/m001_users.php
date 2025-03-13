<?php

function create_users_migration($conn)
{
    $query = ("CREATE TABLE users(
            id INT(11) AUTO_INCREMENT PRIMARY KEY,
            first_name VARCHAR(50) NOT NULL,
            last_name VARCHAR(50) NOT NULL,
            email VARCHAR(50) UNIQUE NOT NULL,
            pass VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )");

    $start = $conn->prepare($query);
    $start->execute();
}
