<?php


function issets_post_data(...$strings)
{
    foreach ($strings as $st) {
        if (!isset($_POST[$st])) {
            return false;
        }
    }
    return true;
}
